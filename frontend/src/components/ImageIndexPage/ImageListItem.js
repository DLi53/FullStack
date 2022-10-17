import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from '../../store/users';

const ImageListItem = ({image, user}) => {
    // console.log(image);
    // const dispatch = useDispatch()
    // const users = useSelector(state => Object.values(state.users))

    // console.log(image.uploaderId);

   
    // console.log(user.profilePicUrl);


    return ( 
        <div className="imageListItem" key={image.id}>
            {/* <ul> */}
                <div className="imagePic">
                    <div ><Link className="overlay" to={`/pins/${image.id}`}/></div>
                    <Link to={`/pins/${image.id}`}><img className="imgIdx" src={image.photoUrl} alt="" /></Link>
                </div>
                <br/>
                <div className="indexDetails">
                    {/* <div>{image.title}</div> */}
                    {/* <div className="indexUser">
                        <img src={user && user.profilePicUrl} alt="" className="userProfilePicIdx" />
                        <div>{user && user.username}</div>
                    </div> */}
                </div>
                <br />
                {/* <li>URL: {image.photoUrl}</li> */}
                <br />
            {/* </ul> */}
        </div>
     );
}
 
export default ImageListItem;