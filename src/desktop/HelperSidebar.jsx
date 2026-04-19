import appComponentStates from "../appComponentStates";

const HelperSidebar = ({setHelperSidebarChosen, currentComponent}) => {
    return (
        <div>
           { currentComponent === appComponentStates.Friends && <p></p> }
        </div>
    )
}

export default HelperSidebar;
