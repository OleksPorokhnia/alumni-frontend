import appComponentStates from "../appComponentStates";
import "../styles/components/helper-sidebar.css";
import MessageSidebar from "./chat/sidebar/MessageSidebar";

const HelperSidebar = ({ helperSidebarState, setHelperSidebarState, currentComponent }) => {
    return (
        <div className="helper-sidebar mt-0">
            {currentComponent === appComponentStates.Messages ? 
            <MessageSidebar
            
                helperSidebarState={helperSidebarState} 
                setHelperSidebarState={setHelperSidebarState}
            /> : null}

            {/* добавлять свое через {currentComponent === appComponentStates.Friends ? <FriendSidebar/> : null} */}

        </div>
    )
}

export default HelperSidebar;
