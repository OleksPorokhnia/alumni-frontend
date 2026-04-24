import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AuthPage from './authentication/AuthPage.jsx';
import Message from './desktop/chat/chatbox/Message.jsx';
import MessageBox from './desktop/chat/chatbox/MessageBox.jsx';
// import { messageApi } from './chat/chatbox/messageApi.jsx'
// , MessageApi, MessageBox 
import SideBar from './desktop/chat/sidebar/SideBar.jsx';
import SideBarItem from './desktop/chat/sidebar/SideBarItem.jsx';
import MainProfile from './profile/mainProfile.jsx';
// import './index.css';

const route = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path:"/auth/registration",
      element: <AuthPage />
    },
    {
      path:"/auth/login",
      element: <AuthPage />
    },
    {
      path:"/dev/chat/message",
      element: <Message />
    },
    {
      path:"/dev/chat/messagebox",
      element: <MessageBox />
    },
    {
      path:"/dev/sidebar/bar",
      element: <SideBar />
    },
    {
      path:"/dev/sidebar/item",
      element: <SideBarItem />
    },
    {
      path:"/dev/profile",
      element: <MainProfile />
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
