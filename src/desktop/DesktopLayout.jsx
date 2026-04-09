import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import appComponentStates from "./AppComponentStates";
import HeaderDesktop from "./HeaderDesktop";
import HelperSidebar from "./HelperSidebar";
import MainSidebar from "./MainSidebar";

const DesktopLayout = () => {

    const [helperSidebarShown, setHelperSidebarShown] = useState(false); 
    const [currentComponent, setCurrentComponent] = useState(appComponentStates.Home); 
    // const [helperBarItems, setHelperBarItems] = useState([]);
1     
    return (
        <>        

        <div className="d-flex flex-column vh-100" > {/*style={{backgroundColor: */}
            <HeaderDesktop  />  

            <Container fluid className="flex-grow-1 d-flex">
                <Row className="flex-grow-1 w-100 my-0">

                    <Col xs={2}>
                        <MainSidebar 
                            setHelperShown={setHelperSidebarShown} 
                            currentComponent={setCurrentComponent}
                            />
                    </Col>

                    {
                        helperSidebarShown === true 
                        ? <Col className="p-2" xs={3}>
                            <Container className="border border-secondary-subtle rounded w-100 h-100" >
                                <HelperSidebar />
                            </Container>
                        </Col> 
                        : null
                    }                    

                    <Col className="p-2" xs={helperSidebarShown === true ? 7 : 10}>
                        <Container className="border border-secondary-subtle rounded w-100 h-100">
                            {/**primary component is here */}
                        </Container>
                    </Col>

                </Row>
            </Container>
        </div>

        </>
    );
}

export default DesktopLayout;