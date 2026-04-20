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
    const [helperSidebarChosen, setHelperSidebarChosen] = useState(null);
    
    return (
        <>        
        
        <div className="d-flex flex-column vh-100" >
            <HeaderDesktop isBulgarian={isBulgarian} setIsBulgarian={setIsBulgarian} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>  
            {isLoggedIn ? 
            <Container fluid className="flex-grow-1 d-flex">
                <Row className="flex-grow-1 w-100 my-0">

                    <Col xs={2}>
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
                        ? <Col className="mt-0" xs={3}>
                            <Container className="border border-secondary-subtle w-100 h-100" >
                                <HelperSidebar 
                                    setHelperSidebarChosen={setHelperSidebarChosen}
                                    currentComponent={currentComponent}
                                    />
                            </Container>
                        </Col> 
                        : null
                    }                    

                    <Col className="mt-0" xs={helperSidebarShown === true ? 7 : 10}>
                        <Container className="border border-secondary-subtle  w-100 h-100">
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