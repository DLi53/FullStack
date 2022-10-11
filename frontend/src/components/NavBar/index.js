import './index.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'
import SearchBar from '../SearchBar/searchBar';
import DropDown from '../DropDown/dropdown';


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
            <p><a href="">GitHub</a></p>
            <p><a href="">LinkedIn</a></p>
            <div className="sessionbutt">
                <p><LoginFormModal /></p>
                <p><SignUpFormModal/></p>
            </div>
        </div>
        );
    }


    const loggedOutNav = (
        <div className = "navBar">
            <div><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div>

            {sessionLinks}
            {/* <p><Link to='/login'>Login</Link></p>
            <p><Link to='/signp'>Sign Up</Link></p> */}
        </div>

    )
    const loggedInNav = ( 
        <div className="navBar">
            <div className="frontNav">
                <div><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div>
                <div id='navLinkHome'><Link to="/" className='navLinkHome'>Home</Link></div>
                <div className='navLink'><Link to="/" className='navLinkCreate'>Create</Link></div>
            </div>
            <div className='searchBar'><SearchBar></SearchBar></div>

            <div className='backNav'>
                <div className='icons'><a href="github.com"><i class="fa-brands fa-github"></i></a></div>
                <div className='icons'><a href="linkedin.com"><i class="fa-brands fa-linkedin-in"></i></a></div>
                <div className='icons'><a href=""><i class="fa-solid fa-user"></i></a></div>
                <div className='icons'><DropDown></DropDown></div>
            </div>
        </div>
     );

     return sessionUser ? loggedInNav : loggedOutNav
}
 
export default NavBar;