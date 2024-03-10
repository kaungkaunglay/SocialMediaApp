import Leftbar from "./components/leftbar/leftbar";
import RightBar from "./components/rightbar/Rightbar";
import Share from "./components/share/Share";
import Login  from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/profile";
import Navbar from "./components/navbar/Navbar";
import './style.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
function App() {
  const currentUser = useContext(AuthContext); 
  const {darkMode} = useContext(DarkModeContext);
  const queryClient = new QueryClient();

 
  const Layout = () =>{
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: 'flex'}} >
        <Leftbar/>
        <div style={{flex: 6}}>
        <Outlet/>
        </div>
        <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
    )
  }
  const ProtectRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <ProtectRoute><Layout/></ProtectRoute> ,
        children: [
          {
            path: "/",
            element: <Home/>
          },
          {
            path: "/profile/:id",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>,
      }
    ]
  );
  return(
     <RouterProvider router={router}/>
  )
}

export default App;
