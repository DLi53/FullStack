import './index.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const sessionUser = useSelector((state) => state.session.user);
    
    const dropDownEvent = () => {
        document.getElementById("myDropdown").classList.toggle("show")
    }

    const loggedOutNav = (
        <div className = "navBar">
            <p><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></p>
            <p>Logged Out Nav</p>
            <p><Link to='/login'>Login</Link></p>
            <p><Link to='/signp'>Sign Up</Link></p>
        </div>

    )
    const loggedInNav = ( 
        <div className="navBar">
            <p><a href=""><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321" alt="" /></a></p>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/">Create</Link></p>
            <p>SEARCHBAR GOES HERE</p>
            <Link></Link>
            <p><a href="">GitHub</a></p>
            <p><a href="">Linked In</a></p>
            <p><a href="">Profile</a></p>
            <p><button className='dropDown' >DropDown</button>
                <div className='dropDownContent'>
                    <Link to="/">UserProfile</Link>
                    <Link to="/">LogOut</Link>
                </div>
            </p>
        </div>
     );

     return sessionUser ? loggedInNav : loggedOutNav
}
 
export default NavBar;