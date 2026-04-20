import { Button, Container, Navbar } from "react-bootstrap";
import "../style/header-desktop.css";
import { logout } from "../utils/axiosApi";

const HeaderDesktop = ({
    isBulgarian,
    setIsBulgarian,
    isLoggedIn,
    setIsLoggedIn
}) => {

    return (
    <Navbar sticky="top" className="bg-white" style={{ borderBottom: "2px solid rgb(38, 86, 130)" }} >
        <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
            <img
              src={isBulgarian ?"./src/assets/bg-logo.svg" : "./src/assets/en-logo.svg"}
              alt="Logo"
              style={{
                height: "40px",
                width: "auto",
                objectFit: "contain"
              }}/>
        </Navbar.Brand>
        
        <div>
            <button
                onClick={() => {
                    setIsBulgarian(true);
                }}
                className="flag-btn"
                style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    marginRight: "1vw",
                    cursor: "pointer"
                }}
            >
                <img
                    src="./src/assets/bulgarian.svg"
                    alt="Bulgarian"
                    style={{
                        border: "1px solid rgb(38, 86, 130)",
                        height: "20px",
                        width: "auto"
                    }}
                />
            </button>

            <button
                onClick={() => {
                    setIsBulgarian(false);
                }}
                className="flag-btn"
                style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    marginRight: "1vw",
                    cursor: "pointer"
                }}
            >
                <img
                    src="./src/assets/english.svg"
                    alt="English"
                    style={{
                        border: "1px solid rgb(38, 86, 130)",
                        height: "20px",
                        width: "auto"
                    }}
                />
            </button>
        { isLoggedIn ? 
            <>
                <Navbar.Text style={{fontSize: "85%"}}>
                    {isBulgarian ? "Здравейте, " : "Hello, "}
                    {"user name should be here"}
                </Navbar.Text>
                <Button onClick={() => {
                    logout();
                    setIsLoggedIn(false);
                }} variant="link" style={{fontSize: "85%"}}>
                    {isBulgarian ? "(Излизане от профила)" : "(Log out)"}
                </Button> 
            </>
        : null
        
        }
        
        </div>

        </Container>
    </Navbar>);

}

export default HeaderDesktop;