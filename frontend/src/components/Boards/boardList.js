import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBoards } from "../../store/boards";
import BoardListItem from "./boardListItem";

const BoardList = ({userId}) => {
    // const {id} = useParams()
    const id = userId
    const dispatch = useDispatch()
    const boards = useSelector(state => {
        let arr = []
        Object.values(state.boards).forEach(board => {
            if (board.userId === id) {
                arr.push(board)
            }
        })
        return arr
    })

    const boardmap = boards.map(board => {return <BoardListItem board={board} key={board.id}/>})


    useEffect((e) => {
        dispatch(fetchBoards(userId))
        // dispatch(fetchUser(id))
    }, [])

    return ( 
        <div className="BoardList">
            {boardmap}
        </div>
     );
}
 
export default BoardList;