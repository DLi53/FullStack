import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageListItem from "../ImageIndexPage/ImageListItem";
import { fetchImages, fetchImage } from '../../store/images';
import './index.css'
import DropDown from "../DropDown/dropdown";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../store/users";
import SavePin from "../Pins/SavePin";
import Comments from '../Comments'
import FollowButton from "../FollowButton";
import UserDeets from "./UserDeets";
import { fetchFollows } from "../../store/follows";

const ImageShowPage = () => {
    const dispatch = useDispatch()
    let {id} = useParams()

    // id = Number(id)

    // const image = useSelector(state => state.images)
    // const imagedeets = image[id]
    const imagedeets = useSelector(state => state.images[id])

    const userdeets = useSelector(state => state.users[imagedeets && imagedeets.uploaderId])
    const currentUserId = useSelector(state => state.session.user.id)

    useEffect(() => {
        dispatch(fetchImage(id))
        dispatch(fetchFollows())

    },[id])

    const editPage = <Link className="updateItem" to={`/pins/${id}/edit`}><i className="fa-solid fa-pen-to-square"></i></Link>

    const editButton = (imagedeets && imagedeets.uploaderId) === currentUserId ? editPage : ""


    return ( 
       <div className="imageShowPage">
            <div className="imageShowBox">
                

                    {/* <div className="picArea"> */}
                        <div className="leftSideShow" >
                                <img className="pictureUpload" src={imagedeets && imagedeets.photoUrl} alt="" />
                        </div>

                        <div className="rightSideShow">
                        <div className="insiderightSideShow">
                            <div className="topPartShow">
                               {editButton}
                                <SavePin imageId={id}/>
                            </div>

                            <div className="title">
                                <h1 className="imageTitle">{imagedeets && imagedeets.title}</h1>
                            </div>

                            <div className="description">
                                <p className="imageDescription">{imagedeets && imagedeets.description}</p>
                            </div>

                     
                            <UserDeets userdeets = {userdeets && userdeets} />
                            <div className="commentsShow">
                                <Comments></Comments>
                            </div>

                            
                        </div>
                        </div>
                    {/* </div> */}
           
            </div>
        </div>
     );
}
 
export default ImageShowPage;