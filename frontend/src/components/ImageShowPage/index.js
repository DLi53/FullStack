import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageListItem from "../ImageIndexPage/ImageListItem";
import { fetchImage } from '../../store/images';


const ImageShowPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()


    const image = useSelector(state => Object.values(state.images))


    useEffect(() => {
        // e.preventDefault()

        // debugger
        dispatch(fetchImage(id))
    },[])


    return ( 
        <div>
            <ImageListItem image={image[0]} />
        </div>
     );
}
 
export default ImageShowPage;