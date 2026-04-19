import { useEffect, useState } from 'react';
import appComponentStates from "./appComponentStates";
import DesktopLayout from './desktop/DesktopLayout';

function App() {
  const [isBulgarian, setIsBulgarian] = useState(true);
  const [mobileStyle, setMobileStyle] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(appComponentStates.Home); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/auth/me"); // backend checks cookie
        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
      } finally {
        setLoadingAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (loadingAuth) {
    return <div>Loading...</div>;
  }

  return (
    <DesktopLayout
      isBulgarian={isBulgarian}
      setIsBulgarian={setIsBulgarian}
      mobileStyle={mobileStyle}
      setMobileStyle={setMobileStyle}
      currentComponent={currentComponent}
      setCurrentComponent={setCurrentComponent}
      isLoggedIn={isLoggedIn} // pass it down
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default App;