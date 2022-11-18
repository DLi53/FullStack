import { useSelector } from "react-redux";
import UserDeets from "../ImageShowPage/UserDeets";

const FollowingModal = ({followings, closingModal}) => {


    const allUsers = useSelector(state => state.users)
    const newfollowings = followings.map(id => allUsers[id])
    // console.log(newfollowings);
    const followingsMapped = newfollowings.map(followinguser => <UserDeets userdeets={followinguser} key={followinguser.id}/>)

    return ( 
        <div className="FollowModal">
            <h2>Following:</h2>
            {followingsMapped}
        </div>
     );
}
 
export default FollowingModal;