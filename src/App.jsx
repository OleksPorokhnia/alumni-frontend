import { useEffect, useState } from 'react';
import appComponentStates from "./appComponentStates";
import DesktopLayout from './desktop/DesktopLayout';
import { checkAuth } from './utils/axiosApi';

function App() {
  const [isBulgarian, setIsBulgarian] = useState(true);
  const [mobileStyle, setMobileStyle] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(appComponentStates.Home); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const verify = async () => {
    const result = await checkAuth(); // true or false
    setIsLoggedIn(result);
    setLoadingAuth(false);
  };

  verify();
  }, []);

  return (<>
     {loadingAuth ? 
      isBulgarian ? <div>Моля изчакайте</div> : <div>Please wait</div> 
      : <DesktopLayout
      isBulgarian={isBulgarian}
      setIsBulgarian={setIsBulgarian}
      mobileStyle={mobileStyle}
      setMobileStyle={setMobileStyle}
      currentComponent={currentComponent}
      setCurrentComponent={setCurrentComponent}
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
    />}
    </>
  );
}

export default App;