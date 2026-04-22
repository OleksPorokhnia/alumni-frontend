import "../../../styles/components/chatroom-eventful-element.css";

const ChatroomEventfulElement = ({ chatroom, isSelected, onSelect }) => {
    return (
        <div
            className={
                "chatroom-eventful-element " +
                (isSelected ? "chatroom-eventful-element-selected" : "")
            }
            onClick={() => onSelect(chatroom)}
        >
            {/* Avatar */}
            <div
                className="chatroom-avatar"
            />

            {/* Content */}
            <div className="chatroom-content">
                {/* Header: name + date */}
                <div className="chatroom-header">
                    <span className="chatroom-name">
                        {chatroom.chatroomName}
                    </span>

                    <span className="chatroom-date">
                        {chatroom.activityTime
                            ? new Date(chatroom.activityTime).toLocaleDateString()
                            : ""}
                    </span>
                </div>

                {/* Message preview */}
                <div className="message-preview">
                    {chatroom.messageContent}
                </div>
            </div>
        </div>
    );
};

export default ChatroomEventfulElement;