import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from '../../store/users';

const ImageListItem = ({image, user}) => {
    // console.log(image);
    // const dispatch = useDispatch()
    // const users = useSelector(state => Object.values(state.users))

    // console.log(image.uploaderId);

   
    // console.log(user);


    return ( 
        <div className="imageListItem" key={image.id}>
            {/* <ul> */}
                <li><Link to={`/pins/${image.id}`}><img className="imgIdx" src={image.photoUrl} alt="" /></Link></li>
                {/* <li>ID: {image.id}</li> */}
                {/* <li>Title: {image.title}</li> */}
                {/* <li>Description: {image.description}</li> */}
                <li>Uploader_id: {user && user.username}</li>
                <br />
                {/* <li>URL: {image.photoUrl}</li> */}
                <br />
            {/* </ul> */}
        </div>
     );
}
 
export default ImageListItem;