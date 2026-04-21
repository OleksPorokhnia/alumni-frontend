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

import "../styles/components/ui-floating-panel.css";
import "../styles/components/buttons.css";
import "../styles/components/sidebar.css";
import "../styles/base/colors.css";




const MainSidebar = ({
    isBulgarian,
    setHelperShown,
    mobileStyle,
    setMobileStyle,
    currentComponent,
    setCurrentComponent
}) => {

    const SIDEBAR_ITEMS = [
  {
    id: appComponentStates.Home,
    labelBG: "Новини",
    labelEN: "Feed",
    icon: { blue: homeBlue, white: homeWhite },
    showHelper: false,
  },
  {
    id: appComponentStates.Messages,
    labelBG: "Съобщения",
    labelEN: "Messages",
    icon: { blue: messageBlue, white: messageWhite },
    showHelper: true,
  },
  {
    id: appComponentStates.Friends,
    labelBG: "Приятели",
    labelEN: "Friends",
    icon: { blue: friendsBlue, white: friendsWhite },
    showHelper: true,
  },
  {
    id: appComponentStates.Groups,
    labelBG: "Групи",
    labelEN: "Groups",
    icon: { blue: groupsBlue, white: groupsWhite },
    showHelper: false,
  },
  {
    id: appComponentStates.Personal,
    labelBG: "Профил",
    labelEN: "Profile",
    icon: { blue: personalBlue, white: personalWhite },
    showHelper: false,
  },
  {
    id: appComponentStates.Settings,
    labelBG: "Настройки",
    labelEN: "Settings",
    icon: { blue: settingsBlue, white: settingsWhite },
    showHelper: false,
  },
];

    const [hovered, setHovered] = useState(null);

    const renderIcon = (stateKey, blue, white) => {
        return currentComponent === stateKey || hovered === stateKey
            ? white
            : blue;
    };
return (
  <div
    className={`
      ui-floating-panel
      sidebar-layout
      ${mobileStyle ? "sidebar-layout--mobile" : "sidebar-layout--desktop"}
    `}
  >
    {SIDEBAR_ITEMS.map((item) => {
      const isActive = currentComponent === item.id;

      return (
        <Button
          key={item.id}
          className={`
            ui-panel-button
            ${mobileStyle ? "ui-panel-button--mobile" : "ui-panel-button--desktop"}
            ${isActive ? "ui-panel-button--active" : ""}
          `}
          onClick={() => {
            setHelperShown(item.showHelper);
            setCurrentComponent(item.id);
          }}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={renderIcon(item.id, item.icon.blue, item.icon.white)}
            alt={isBulgarian ? item.labelBG : item.labelEN}
            className="icon"
          />

          {isBulgarian ? item.labelBG : item.labelEN}
        </Button>
      );
    })}
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