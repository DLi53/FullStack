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
        <div>
            {imagedeets && <ImageListItem image={imagedeets} />}
        </div>
     );
}
 
export default ImageShowPage;