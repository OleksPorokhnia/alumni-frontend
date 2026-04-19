import { useState } from "react";
import { Button } from "react-bootstrap";
import appComponentStates from "../appComponentStates";

import homeBlue from "../assets/homeBlue.svg";
import homeWhite from "../assets/homeWhite.svg";

import friendsBlue from "../assets/friendsBlue.svg";
import friendsWhite from "../assets/friendsWhite.svg";

import groupsBlue from "../assets/groupsBlue.svg";
import groupsWhite from "../assets/groupsWhite.svg";

import personalBlue from "../assets/personalBlue.svg";
import personalWhite from "../assets/personalWhite.svg";

import settingsBlue from "../assets/settingsBlue.svg";
import settingsWhite from "../assets/settingsWhite.svg";

import messageBlue from "../assets/messageBlue.svg";
import messageWhite from "../assets/messageWhite.svg";

import "../style/main-sidebar.css";
const MainSidebar = ({
    isBulgarian,
    setHelperShown,
    mobileStyle,
    setMobileStyle,
    currentComponent,
    setCurrentComponent
}) => {

    const [hovered, setHovered] = useState(null);

    const renderIcon = (stateKey, blue, white) => {
        return currentComponent === stateKey || hovered === stateKey
            ? white
            : blue;
    };

    return (
        <div className={`sidebar-container d-grid mt-3 pt-3 pb-5 ${mobileStyle ? "gap-3" : "gap-1"}`}>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Home ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(false);
                    setCurrentComponent(appComponentStates.Home);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Home)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Home, homeBlue, homeWhite)}
                    alt="Home"
                    className="icon"
                />
                {isBulgarian ? "Новини" : "Feed"}
            </Button>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Messages ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(true);
                    setCurrentComponent(appComponentStates.Messages);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Messages)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Messages, messageBlue, messageWhite)}
                    alt="Messages"
                    className="icon"
                />
                {isBulgarian ? "Съобщения" : "Messages"}
            </Button>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Friends ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(true);
                    setCurrentComponent(appComponentStates.Friends);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Friends)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Friends, friendsBlue, friendsWhite)}
                    alt="Friends"
                    className="icon"
                />
                {isBulgarian ? "Приятели" : "Friends"}
            </Button>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Groups ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(false);
                    setCurrentComponent(appComponentStates.Groups);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Groups)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Groups, groupsBlue, groupsWhite)}
                    alt="Groups"
                    className="icon"
                />
                {isBulgarian ? "Групи" : "Groups"}
            </Button>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Personal ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(false);
                    setCurrentComponent(appComponentStates.Personal);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Personal)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Personal, personalBlue, personalWhite)}
                    alt="Personal"
                    className="icon"
                />
                {isBulgarian ? "Профил" : "Profile"}
            </Button>

            <Button
                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} 
                    ${currentComponent === appComponentStates.Settings ? "active" : ""}`}
                onClick={() => {
                    setHelperShown(false);
                    setCurrentComponent(appComponentStates.Settings);
                }}
                onMouseEnter={() => setHovered(appComponentStates.Settings)}
                onMouseLeave={() => setHovered(null)}
            >
                <img
                    src={renderIcon(appComponentStates.Settings, settingsBlue, settingsWhite)}
                    alt="Settings"
                    className="icon"
                />
                {isBulgarian ? "Настройки" : "Settings"}
            </Button>
        </div>
    );
};

export default MainSidebar;




            {/* Toggle style button */}
            {/* <Button
                className="mt-3"
                variant="secondary"
                onClick={() => setMobileStyle(prev => !prev)}
            >
                Toggle Style
            </Button>
             <Button
                className="mt-3"
                variant="secondary"
                onClick={() => setIsBulgarian(prev => !prev)}
            >
                Toggle language
            </Button> */}