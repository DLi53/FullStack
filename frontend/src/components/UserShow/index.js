import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './index.css'

const UserShow = () => {
    const {id} = useParams()
    const userdeets = useSelector(state => state.users[id])
    // console.log(userdeets, id);


    return ( 

        <div className="userShow">
            <img className="userShowPic" src={userdeets.profilePicUrl} alt="" />
            <h1>{userdeets.username}</h1>
            <p>@{userdeets.username}</p>
            <br />
            <div className="createshow">
                <div>created</div>

                <div>show</div>
            </div>
        </div>
     );
}
 
export default UserShow;