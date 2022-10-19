import './index.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'
import SearchBar from '../SearchBar/searchBar';
import DropDown from '../DropDown/dropdown';
import logo from '../../assets/images/wink-xxl.png'
import logo2 from '../../assets/images/WinkText.png'


const NavBar = () => {

    const sessionUser = useSelector((state) => state.session.user);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (''
        // <ProfileButton user={sessionUser} />
        );
        
    } else {
        sessionLinks = (
        <div className='sessionButtons'>
            <p><a href="">Portfolio</a></p>
            <p><a href="https://github.com/DLi53">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/danielli52/">LinkedIn</a></p>
            <div className="sessionbutt">
                <p><LoginFormModal /></p>
                <p><SignUpFormModal/></p>
            </div>
        </div>
        );
    }


    const loggedOutNav = (
        <div className = "navBar" id='loggedOutNav'> 
            <div className='navLogo'>
                <div><a href=""><img className="logo" src={logo} /></a></div>
                <div><a href=""><img className="logo2" src={logo2} /></a></div>

                {/* <div><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div> */}
            </div>

            {sessionLinks}
            {/* <p><Link to='/login'>Login</Link></p>
            <p><Link to='/signp'>Sign Up</Link></p> */}
        </div>

    )
    const loggedInNav = ( 
        <div className="navBar" id='loggedInNav'>
                {/* <div><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div> */}
                <div><Link to="/"><img className="logo" src={logo} /></Link></div>


            <div className="frontNav">
                <div id='navLinkHome'><Link to="/" className='navLinkHome'>Home</Link></div>
                <div className='navLink'><Link to="/pin-builder" className='navLinkCreate'>Create</Link></div>
            </div>
            <div className='searchBar'><SearchBar></SearchBar></div>

            <div className='backNav'>
                <div className='icons'><a href="https://github.com/DLi53"><i className="fa-brands fa-github"></i></a></div>
                <div className='icons'><a href="https://www.linkedin.com/in/danielli52/"><i className="fa-brands fa-linkedin-in"></i></a></div>
                {/* <div className='icons'><a href=""><i className="fa-solid fa-user"></i></a></div> */}
                <div className='icons'><Link to={`/user/${sessionUser && sessionUser.id}`}><i className="fa-solid fa-user"></i></Link></div>

                <div className='icon'><DropDown></DropDown></div>
            </div>
        </div>
     );

     return sessionUser ? loggedInNav : loggedOutNav
}
 
export default NavBar;