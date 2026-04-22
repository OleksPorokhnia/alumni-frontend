import { useCallback, useEffect, useRef, useState } from "react";
import "../../../styles/components/helper-sidebar.css";
import { get } from "../../../utils/axiosApi";
import ChatroomEventfulElement from "./ChatroomEventfulElement";

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const MessageSidebar = ({ helperSidebarState, setHelperSidebarState }) => {
    const [chatrooms, setChatrooms] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [hasFollowing, setHasFollowing] = useState(true);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef(null);

    const cursorRef = useRef({
        latestChatroomId: null,
        latestChatMessageId: null,
        latestEventTime: null,
        loadingLock: false
    });

    const loadMore = useCallback(async () => {
        if (loading || !hasFollowing) return;
        if (cursorRef.current.loadingLock) return;

        cursorRef.current.loadingLock = true;
        setLoading(true);

        try {
            const cursor = cursorRef.current;
            const params = new URLSearchParams();

            if (cursor.latestChatroomId != null) {
                params.append("latestChatroomId", String(cursor.latestChatroomId));
            }
            if (cursor.latestChatMessageId != null) {
                params.append("latestChatMessageId", String(cursor.latestChatMessageId));
            }
            if (cursor.latestEventTime != null) {
                params.append("latestEventTime", cursor.latestEventTime);
            }

            const queryString = params.toString();

            const res = await get(
                `/chat/load-chatrooms${queryString ? `?${queryString}` : ""}`
            );

            if (res?.content?.length > 0) {
                setChatrooms(prev => {
                    const merged = [...prev, ...res.content];

                    const lastItem = res.content[res.content.length - 1];

                    cursorRef.current.latestChatroomId = lastItem?.chatroomId ?? null;
                    cursorRef.current.latestChatMessageId = lastItem?.lastChatMessageId ?? null;
                    cursorRef.current.latestEventTime = lastItem?.activityTime ?? null;

                    return merged;
                });
            }

            setHasFollowing(res.hasFollowing);
        } catch (err) {
            console.error("Failed loading chatrooms", err);
        }

        cursorRef.current.loadingLock = false;
        setLoading(false);
    }, [loading, hasFollowing]);

    // INITIAL LOAD
    useEffect(() => {
        loadMore();
    }, []);

    // AUTO LOAD IF CONTENT DOES NOT FILL SCREEN
    const checkIfNeedsMore = useCallback(() => {
        const el = containerRef.current;
        if (!el || loading || !hasFollowing) return;

        const isScrollable = el.scrollHeight > el.clientHeight;

        if (!isScrollable) {
            loadMore();
        }
    }, [loading, hasFollowing, loadMore]);

    useEffect(() => {
        checkIfNeedsMore();
    }, [chatrooms]);

    // SCROLL HANDLER
    const handleScroll = useCallback(
        debounce(() => {
            const el = containerRef.current;
            if (!el || loading || !hasFollowing) return;

            const distanceToBottom =
                el.scrollHeight - el.scrollTop - el.clientHeight;

            if (distanceToBottom <= 10) {
                loadMore();
            }
        }, 120),
        [loading, hasFollowing]
    );

    const handleSelect = chatroom => {
        setSelectedId(chatroom.chatroomId);
        setHelperSidebarState(chatroom);
    };

    return (
        <div
            ref={containerRef}
            onScroll={handleScroll}
            className="helper-sidebar__scroll"
        >
            {chatrooms.map((c, idx) => (
                <ChatroomEventfulElement
                    key={`${c.chatroomId}-${c.lastChatMessageId}-${idx}`}
                    chatroom={c}
                    isSelected={selectedId === c.chatroomId}
                    onSelect={handleSelect}
                />
            ))}

            {loading && (
                <div className="text-center py-2">Loading...</div>
            )}

            {!hasFollowing && (
                <div className="text-center text-muted py-2">
                    No more chats
                </div>
            )}
        </div>
    );
};

export default MessageSidebar;