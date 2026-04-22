import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeaderDesktop from "./HeaderDesktop";
import HelperSidebar from "./HelperSidebar";
import LoginElement from "./LoginElement";
import MainSidebar from "./MainSidebar";

const DesktopLayout = ({

  isBulgarian,
  setIsBulgarian,
  mobileStyle,
  setMobileStyle,
  currentComponent,
  setCurrentComponent,
  isLoggedIn,
  setIsLoggedIn
}) => {

    const [helperSidebarShown, setHelperSidebarShown] = useState(false); 
    const [helperSidebarState, setHelperSidebarState] = useState(null);
    
    return (
        <>        
        
    <div className="d-flex flex-column vh-100 overflow-hidden">            
        <HeaderDesktop isBulgarian={isBulgarian} setIsBulgarian={setIsBulgarian} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>  
            {isLoggedIn ? 
                <Container fluid className="flex-grow-1 d-flex overflow-hidden">
                <Row className="flex-grow-1 w-100 my-0 h-100">
                    <Col className="mt-4 d-flex flex-column h-100" xs={2}>                        
                        <MainSidebar 
                            isBulgarian={isBulgarian}
                            setHelperShown={setHelperSidebarShown} 
                            mobileStyle={mobileStyle}
                            setMobileStyle={setMobileStyle}
                            currentComponent={currentComponent}
                            setCurrentComponent={setCurrentComponent}
                            
                            />
                    </Col>

                    {
                        helperSidebarShown === true 
                        ? <Col className="mt-0 d-flex flex-column h-100" xs={3}>
                            <Container className=" w-100 h-100" >
                                <HelperSidebar 
                                    helperSidebarState={helperSidebarState}
                                    setHelperSidebarState={setHelperSidebarState}
                                    currentComponent={currentComponent}
                                    />
                            </Container>
                        </Col> 
                        : null
                    }                    

                    <Col className="mt-0 d-flex flex-column h-100" xs={helperSidebarShown === true ? 7 : 10}>
                        <Container className=" w-100 h-100">
                            {/**primary component is here */}
                            AAAAAИИИИ
                        </Container>
                    </Col>

                </Row>
            </Container> : 
            
            <LoginElement isBulgarian={isBulgarian} setIsLoggedIn={setIsLoggedIn}/>}
        </div>

        </>
    );
}

export default DesktopLayout;