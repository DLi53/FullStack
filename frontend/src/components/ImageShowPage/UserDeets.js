import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FollowButton from "../FollowButton";

const UserDeets = ({userdeets}) => {
    const self = useSelector(state => state.session.user.id)

    return ( 
        <div className="userdeets">
            <Link to={`/user/${userdeets && userdeets.id}`} className="userdeetsleft" >
                <img className="profileIcon" src={userdeets.profilePicUrl} alt="" />
                <h4>{userdeets && userdeets.username}</h4>
            </Link>
            <div className="userdeetsright">
                {/* <button className="followShow">Follow</button> */}
                { self === userdeets.id ? '' : <FollowButton user={userdeets}/> }
            </div>

        </div>
     );
}
 
export default UserDeets;