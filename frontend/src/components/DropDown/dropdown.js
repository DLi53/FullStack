import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import './dropdown.css'


const DropDown = () => {
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const sessionUser = useSelector((state) => state.session.user)
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
     }, [showMenu]);

    const logoutClick = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout())
        .then(()=> {history.push("/")})

    }

    //make function to show dropdown or nah

    return ( 
           <div className="dropdown">
                <button className='dropbtn' onClick={openMenu}><i className="fa-solid fa-angle-down"></i></button>
                {showMenu && (
                    <div className='dropdown-content'>
                        <div> Currently in</div>
                        <Link to="/">Profile of {sessionUser.username} </Link>
                        <Link to="/" onClick={logoutClick}>Log Out</Link>
                    </div>
                )}
            </div>
     );
}
 
export default DropDown;