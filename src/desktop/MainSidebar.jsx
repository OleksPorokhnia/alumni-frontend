import { Button } from "react-bootstrap";
import "../style/main-sidebar.css";

const MainSidebar = ({setHelperShown, setWindowState}) => {
    return (
    <div className="d-grid gap-2 mt-3">
            <Button
                className="text-start my-light-btn"
                variant="light"
                size="sm"
                onClick={() => {
                    setHelperShown(false);
                }}
            >
                <img
                    src="./src/assets/home-ex.svg"
                    alt="Logo"
                    style={{
                        height: "20px",
                        width: "auto",
                        objectFit: "contain",
                        marginRight: "3%"
                    }}
                />
                Home
            </Button>

            <Button
                className="text-start my-light-btn"
                variant="light"
                size="sm"
                onClick={() => {
                    setHelperShown(true);
                }}
            >
                Messages
            </Button>
            {/* <Button
                className="text-start my-light-btn"
                variant="light"
                size="sm"
                onClick={() => onSelect("second")}
            >
                Third Button
            </Button>
            <Button
                className="text-start my-light-btn"
                variant="light"
                size="sm"
                onClick={() => onSelect("second")}
            >
                Fourth Button
            </Button> */}
        </div>)
}

export default MainSidebar;