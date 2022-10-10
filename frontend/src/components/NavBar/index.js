import './index.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpFormModal';
import * as sessionActions from '../../store/session'


const NavBar = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = ('hi'
        // <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
        <>
            <p><LoginFormModal /></p>
            <p><SignUpFormModal/></p>
            {/* <p><Link to="/signup">Sign Up</Link></p> */}
        </>
        );
    }

    const logoutClick = () => {
        dispatch(sessionActions.logout())
    }

    const dropDownEvent = () => {
        document.getElementById("myDropdown").classList.toggle("show")
    }



    const loggedOutNav = (
        <div className = "navBar">
            <p><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></p>
            <p>Logged Out Nav</p>
            {sessionLinks}
            {/* <p><Link to='/login'>Login</Link></p>
            <p><Link to='/signp'>Sign Up</Link></p> */}
        </div>

    )
    const loggedInNav = ( 
        <div className="navBar">
            <div><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/">Create</Link></div>
            <div>SEARCHBAR GOES HERE</div>
            {/* <Link></Link> */}
            <div><a href="">GitHub</a></div>
            <div><a href="">Linked In</a></div>
            <div><a href="">Profile</a></div>
            <div><button className='dropDown' >DropDown</button>
                <div className='dropDownContent'>
                    <Link to="/">UserProfile</Link>
                    <Link to="/" onClick={logoutClick}>LogOut</Link>
                </div>
            </div>
        </div>
     );

     return sessionUser ? loggedInNav : loggedOutNav
}
 
export default NavBar;