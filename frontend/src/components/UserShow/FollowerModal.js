import { useSelector } from "react-redux"
import UserDeets from "../ImageShowPage/UserDeets"

const FollowerModal = ({followers}) => {


    const allUsers = useSelector(state => state.users)
    const newfollowers = followers.map(id => allUsers[id])
    // console.log(newfollowers);
    const followersMapped = newfollowers.map(followeruser => <UserDeets userdeets={followeruser} key={followeruser.id}/>)


    console.log(followers)
    return ( 
        <div className="FollowModal">
            <h2>Followers:</h2>
            {followersMapped}

        </div>
     );
}
 
export default FollowerModal;