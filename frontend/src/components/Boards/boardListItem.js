import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPins } from "../../store/pins";
import './board.css'
import { Link } from "react-router-dom";

const BoardListItem = ({board}) => {
    const dispatch = useDispatch()

    const pins = useSelector(state => {
        let arr = []
        Object.values(state.pins).forEach(pin => {
            if (pin.boardId === board.id) {
                arr.push(pin.imageId)
            }
        })
        return arr
    })

    const pinImages = useSelector(state => {
        let arr = []
        Object.values(state.images).forEach(image => {
            if (pins.includes(image.id)) {
                arr.push(image.photoUrl)
            }
        })
        return arr
    })

    // .photoUrl || "http://weknowyourdreams.com/images/grey/grey-11.jpg"


    const boardCoverPic = 
    <Link to={`/board/${board.id}`} className="boardCover">
        <div className="boardCoverPic">
            <div className="leftBoardPic">
                <img className="boardPic0" src={pins && pinImages[0]} alt="" />
            </div>

            <div className="rightBoardPic">
                <img className="boardPic1" src={pins && pinImages[1]} alt="" />
                <img className="boardPic2" src={pins && pinImages[2]} alt="" />
            </div>
        </div>
        <div className="boardTitle"><h2>{board.title}</h2></div>
    </Link >
    


    useEffect(() => {
        dispatch(fetchPins())
    }, [])

    return ( 
        <div className="BoardListItem">


            {boardCoverPic}


        </div>
     );
}
 
export default BoardListItem;