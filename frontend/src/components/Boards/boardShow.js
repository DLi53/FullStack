import Masonry from "react-masonry-css";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchBoards } from "../../store/boards"
import { fetchPins } from "../../store/pins"
import ImageListItem from "../ImageIndexPage/ImageListItem"
import { Modal } from '../Modal/modal.jsx';
import BoardDeleteModal from "./BoardDeleteModal";


const BoardShow = () => {
    const dispatch = useDispatch()
    const {boardId} = useParams()
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const boardTitle = useSelector(state => state.boards[boardId].title)
    const boardUserId = useSelector(state => state.boards[boardId].userId)
    const sessionUserId = useSelector(state => state.session.user.id)


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
                    id ="masonryShow"
                >
                    {allImages}
                </Masonry>


    return ( 
        <div className="BoardShow">
            {boardUserId === sessionUserId ? 
            <div className="BoardDeleteIcon" onClick={() => setShowDeleteModal(true)} ><i className="fa-solid fa-trash"></i></div>
            : ''}
            <h2>{boardTitle && boardTitle}</h2>
                    {allImages.length} Pins
                    {showDeleteModal && (
                        <Modal onClose={() => setShowDeleteModal(false)}>
                            <BoardDeleteModal />
                        </Modal>
                    )}
            <br />
            <br />
            <br />
            {/* {imageListItems} */}
            <div className="BoardShowImages">{allImages}</div>
        </div>
     );
}
 
export default BoardShow;