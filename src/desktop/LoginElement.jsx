import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/main-sidebar.css";
import { login, signup } from '../utils/axiosApi';

const LoginElement = ({
    isBulgarian,
    setIsLoggedIn,
    mobileStyle
}) => {

    const [mode, setMode] = useState("login"); // "login" | "signup"

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState(null);
    const [hovered, setHovered] = useState(null);

    const handleSubmit = async () => {
        try {
            setError(null);

            if (mode === "login") {
                await login({username, password});
                setIsLoggedIn(true);
            } else {
                await signup({ username, password });
                setIsLoggedIn(true);
            }
        } catch (err) {
            console.log(err);
            setError(
                err.response?.data?.message ||
                (isBulgarian ? "Грешка при заявката" : "Request error")
            );
        }
    };

    return (
        <>
            <Container fluid className="flex-grow-1 d-flex">
                <Row className="flex-grow-1 w-100">

                    <Col xs={8} className="d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <h3 className="mb-4 fs-2 fst-italic" style={{ color: "rgb(38, 86, 130)" }}>
                                {isBulgarian ? "Добре дошли в платформата за абсолвенти." : "Welcome to the alumni platform."}
                            </h3>

                            <h3 className="mb-4 fs-2 fst-italic" style={{ color: "rgb(38, 86, 130)" }}>
                                {isBulgarian ? "Връзката с университета не свършва със завършването." : "Your connection with the university does not end with graduation."}
                            </h3>

                            <h3 className="mb-4 fs-2 fst-italic" style={{ color: "rgb(38, 86, 130)" }}>
                                {isBulgarian ? "Моля, продължете с вход или регистрация." : "Please continue with login or registration."}
                            </h3>

                            <img
                                src="./src/assets/alumniHeart.svg"
                                alt="Alumni"
                                style={{
                                    height: "50%",
                                    width: "50%"
                                }}
                            />
                        </div>
                    </Col>

                    <Col className={'mt-5 width: "3vw"'}xs={3}>
                        <div className={`sidebar-container d-grid mt-3 pt-3 pb-5 ${mobileStyle ? "gap-4" : "gap-3"}`} style={{width: "70%"}}>

                            <input
                                type="login"
                                className="form-control sidebar-input"
                                placeholder={isBulgarian ? "Потребителско име" : "Login"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                type="password"
                                className="form-control sidebar-input"
                                placeholder={isBulgarian ? "Парола" : "Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button
                                className={`text-start sidebar-btn ${mobileStyle ? "mobile" : "desktop"} border mt-4`}
                                onClick={handleSubmit}
                                onMouseEnter={() => setHovered("auth")}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {mode === "login"
                                    ? (isBulgarian ? "Вход в системата" : "Login")
                                    : (isBulgarian ? "Създаване на профил" : "Sign Up")}
                            </Button>

                            <div className="mt-2 small">
                                {mode === "login" ? (
                                    <>
                                        {isBulgarian ? "Нямате регистрация?" : "Not signed up yet?"}{" "}
                                        <a className="switch-link" onClick={() => setMode("signup")}>
                                            {isBulgarian ? "Създайте профил" : "Sign up"}
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        {isBulgarian ? "Вече имате регистрация?" : "Already have an account?"}{" "}
                                        <a className="switch-link" onClick={() => setMode("login")}>
                                            {isBulgarian ? "Вход" : "Login"}
                                        </a>
                                    </>
                                )}
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LoginElement;