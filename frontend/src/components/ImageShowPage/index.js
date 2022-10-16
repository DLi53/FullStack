import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageListItem from "../ImageIndexPage/ImageListItem";
import { fetchImages, fetchImage } from '../../store/images';
import './index.css'
import DropDown from "../DropDown/dropdown";

const ImageShowPage = () => {
    const dispatch = useDispatch()
    let {id} = useParams()
    id = Number(id)

    const image = useSelector(state => state.images)
    const imagedeets = image[id]
    const userdeets = useSelector(state => state.users[imagedeets.uploaderId])
    console.log(userdeets);

    useEffect(() => {
        dispatch(fetchImage(id))
    },[id])


    return ( 
       <div className="imageShowPage">
            <div className="imageShowBox">
                

                    {/* <div className="picArea"> */}
                        <div className="leftSideShow" >
                            <img className="pictureUpload" src={imagedeets.photoUrl} alt="" />
                        </div>

                        <div className="rightSideShow">
                            <div className="topPartShow">
                                <label htmlFor="">Profile
                                    <DropDown></DropDown>
                               </label>
                               <button>Save</button>
                            </div>

                            <div className="title">
                                <h1 className="imageTitle">{imagedeets.title}</h1>
                            </div>

                            <div className="description">
                                <p className="imageDescription">{imagedeets.description}</p>
                            </div>

                            <div className="userdeets">
                                <div className="userdeetsleft">
                                    <img src={userdeets.profilePicUrl} alt="" />
                                    <h6>{userdeets.username}</h6>
                                </div>
                                <div className="userdeetsright">
                                    FOLLOW
                                </div>
                            </div>

                            <div className="commentsShow">
                                COMMENTS ?
                            </div>

                        </div>
                    {/* </div> */}
           
            </div>
        </div>
     );
}
 
export default ImageShowPage;