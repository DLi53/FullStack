import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../store/images';
import ImageListItem from './ImageListItem';
import './index.css' 

const ImageIndexPage = () => {
    const images = useSelector(state => Object.values(state.images));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImages())
    },[])

// console.log(images);
    const imageListItems = images.map(image => <ImageListItem image={image} key={image.id}/>)

    return ( 
        <div className="imageIndexPage">
            <ul className="imagesList">
                {/* <img className='deleteThis' src="https://imstresst-dev.s3.amazonaws.com/Screen+Shot+2022-10-12+at+9.25.24+AM.png" alt="" /> */}
                {imageListItems}
            </ul>

        </div>
     );
}
 
export default ImageIndexPage;