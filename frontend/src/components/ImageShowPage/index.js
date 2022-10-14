import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageListItem from "../ImageIndexPage/ImageListItem";
import { fetchImages, fetchImage } from '../../store/images';
import './index.css'

const ImageShowPage = () => {
    const dispatch = useDispatch()
    let {id} = useParams()
    id = Number(id)

    const image = useSelector(state => state.images)

    
    const imagedeets = image[id]

     
    useEffect(() => {
        dispatch(fetchImage(id))
    },[id])


    return ( 
       <div className="imageShowPage">
            <div className="imageShowBox">
                

                    <div className="picArea">
                        <div className="leftSideShow">
                            <img className="pictureUpload" src={imagedeets.photoUrl} alt="" />
                        </div>

                        <div className="rightside">
                            <div className="saveArea">
                                <input className="saveButton" type="submit" value="Save"/>
                             </div>

                            <input className="titleInput" type="text" 
                                
                                    placeholder="Add your title"
                                    
                            
                            ></input>


                            <div className="username">
                                <img className="createProfilePic" src='' alt="" />
                     
                            </div>
                            <input className="descriptionInput" 
                            
                            placeholder="Tell everyone what your Pin is about"
   >
                            </input>
                        </div>
                    </div>
           
            </div>
        </div>
     );
}
 
export default ImageShowPage;