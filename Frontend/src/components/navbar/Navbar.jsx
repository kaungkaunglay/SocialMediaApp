import './navbar.scss'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/BroadcastOnPersonalOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchOutlinedIcon from '@mui/icons-material/Search'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from '../../context/authContext';

const Navbar =() =>{
    const {toggle} = useContext(DarkModeContext);
    const {darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='Navbar'>
            <div className='left'>
                <Link to='/' style={{textDecoration: "none"}}>
                <span>Pandora Social</span>
                </Link>
                 <HomeIcon/>
                        {darkMode ? (
                <WbSunnyOutlinedIcon onClick={toggle} />
                ) : (
                <DarkModeIcon onClick={toggle} />
                )}

                 <GridViewIcon/>
                 <div className='search'>
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder='Search'/>
                 </div>
            </div>  
            <div className='right'>
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsNoneIcon/>
                <div className='user'>
                    <img src={currentUser.profilePic} alt="" />
                  
                    <span>{currentUser.name}</span>
                </div>
        
                
            </div>
        </div>
    )
}
export default Navbar