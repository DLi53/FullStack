import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../store/images';
import ImageListItem from './ImageListItem';
import './index.css' 
import SplashPage from '../SplashPage';
import Masonry from 'react-masonry-css'
import { fetchUsers } from '../../store/users';

const ImageIndexPage = () => {
    const sessionUser = useSelector((state) => state.session.user);
    const images = useSelector(state => Object.values(state.images));
    const users = useSelector(state => (state.users));
    // console.log(users);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchImages())
    //     dispatch(fetchUsers())
    // },[])

    const breakpointColumnsObj = {
        default: 7,
        1700: 6,
        1500: 5,
        1200: 4,
        1000: 3,
        700: 2,
        500: 1
    };

    const imageListItems = images.map(image => {return <ImageListItem image={image} key={image.id} user={users[image.uploaderId]}/>})



    const index =( 
        <div className="imageIndexPage">
            <ul className="imagesList" >
                {/* <img className='deleteThis' src="https://imstresst-dev.s3.amazonaws.com/Screen+Shot+2022-10-12+at+9.25.24+AM.png" alt="" /> */}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {imageListItems}
                </Masonry>
            </ul>

        </div>
     );

     return sessionUser ? index : <SplashPage/>
     
}
 
export default ImageIndexPage;