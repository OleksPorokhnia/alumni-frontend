import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { login, signup } from '../utils/axiosApi';

import "../styles/components/ui-floating-panel.css";
import "../styles/components/buttons.css";
import "../styles/components/sidebar.css";
import "../styles/base/colors.css";

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
  <Container fluid className="flex-grow-1 d-flex">
    <Row className="flex-grow-1 w-100">

      {/* LEFT SIDE */}
      <Col xs={8} className="d-flex justify-content-center align-items-center">
        <div className="text-center">

          {[
            {
              bg: "Добре дошли в платформата за абсолвенти.",
              en: "Welcome to the alumni platform.",
            },
            {
              bg: "Връзката с университета не свършва със завършването.",
              en: "Your connection with the university does not end with graduation.",
            },
            {
              bg: "Моля, продължете с вход или регистрация.",
              en: "Please continue with login or registration.",
            },
          ].map((t, i) => (
            <h3
              key={i}
              className="mb-4 fs-2 fst-italic"
              style={{ color: "var(--primary)" }}
            >
              {isBulgarian ? t.bg : t.en}
            </h3>
          ))}

          <img
            src="./src/assets/alumniHeart.svg"
            alt="Alumni"
            style={{width:"50%", height:"auto"}}
          />
        </div>
      </Col>

      <Col xs={3} className="mt-5">

        <div className={`ui-floating-panel d-grid mt-3 pt-3 pb-5 ${mobileStyle ? "gap-4" : "gap-3"}`} style={{width: "70%"}}>

          <input
            type="text"
            className="form-control mt-4"
            placeholder={isBulgarian ? "Потребителско име" : "Login"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="form-control mt-2"
            placeholder={isBulgarian ? "Парола" : "Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className={`
              ui-panel-button
              ${mobileStyle ? "ui-panel-button--mobile" : "ui-panel-button--desktop"}
            `}
            style={{border: "1px solid rgb(148, 190, 227)"}}
            onClick={handleSubmit}
            onMouseEnter={() => setHovered("auth")}
            onMouseLeave={() => setHovered(null)}
          >
            {mode === "login"
              ? isBulgarian
                ? "Вход в системата"
                : "Login"
              : isBulgarian
              ? "Създаване на профил"
              : "Sign Up"}
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
);
}

export default LoginElement;