import Masonry from "react-masonry-css";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchBoards } from "../../store/boards"
import { fetchPins } from "../../store/pins"
import ImageListItem from "../ImageIndexPage/ImageListItem"

const BoardShow = () => {
    const dispatch = useDispatch()
    const {boardId} = useParams()


    const pins = useSelector(state => {
        let arr = []
        Object.values(state.pins).forEach(pin => {
            if (pin.boardId === parseInt(boardId)) {

                arr.push(pin.imageId)
            }
        })
        return arr
    })



    const pinImages = useSelector(state => {
        let arr = []
        Object.values(state.images).forEach(image => {
            if (pins.includes(image.id)) {
                arr.push(image)
            }
        })
        return arr
    })



    useEffect(() => {
        dispatch(fetchBoards())
        dispatch(fetchPins())
    }, [])

    const breakpointColumnsObj = {
        default: 7,
        1700: 6,
        1500: 5,
        1200: 4,
        1000: 3,
        700: 2,
        500: 1
    };

    const allImages = pinImages.map(image => {return <ImageListItem image={image} key={image.id} />})
    const imageListItems =                 
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {allImages}
                </Masonry>


    return ( 
        <div className="BoardShow">
            <br />
            <br />
            <br />
            {imageListItems}
        </div>
     );
}
 
export default BoardShow;