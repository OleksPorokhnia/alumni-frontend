import { Button, Container, Navbar } from "react-bootstrap";

const HeaderDesktop = () => {

    return (
    <Navbar sticky="top" className="border-bottom bg-white">
        <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
            <img
              src="./src/assets/bg-logo.svg"
              alt="Logo"
              style={{
                height: "30px",
                width: "auto",
                objectFit: "contain"
              }}/>
        </Navbar.Brand>
        <div>
        <Navbar.Text style={{fontSize: "85%"}}>
            {"User name should go here"}
        </Navbar.Text>
        <Button variant="link" style={{fontSize: "85%"}}>
            {"Logout/Login"}
        </Button>
        </div>

        </Container>
    </Navbar>);

}

export default HeaderDesktop;