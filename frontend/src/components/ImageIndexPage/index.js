import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../store/images';
import ImageListItem from './ImageListItem';
import NavBar from '../NavBar';
import './index.css' 

const ImageIndexPage = () => {
    const images = useSelector(state => Object.values(state.images));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImages())
    },[])

// console.log(images);
    const imageList = images.map(image => <ImageListItem image={image} key={image.id}/>)

    return ( 
        <div className="imageIndexPage">
            <ul className="imagesList">
                {imageList}
            </ul>

        </div>
     );
}
 
export default ImageIndexPage;