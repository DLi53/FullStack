import './pin.css'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBoards } from '../../store/boards';
import { fetchImages } from '../../store/images';
import { useParams } from 'react-router-dom';
import { createPin, fetchPins } from '../../store/pins';

const SavePin = ({imageId}) => {
    const currentUserId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()

    const boards = useSelector(state => {
        let arr = []
        Object.values(state.boards).forEach(board => {
            if (board.userId === currentUserId) {
                arr.push(board)
            }
        })
        return arr
    })

    const [boardSelected, setBoardSelected] = useState('')
    
    const handleClick = (e)=> {
        e.preventDefault()
        setBoardSelected(e.target.value)
        // console.log(boardSelected);
    }

    const boardOptions = boards.map(
        board => <option 
                    key={board.id} 
                    value ={board.id}

                    >{board.title}</option> )


    useEffect(() => {

        dispatch(fetchBoards(currentUserId))
    },[])



    const handleSubmit = () => {
   
        // console.log(boardSelected);


        dispatch(createPin({image_id: imageId, board_id: boardSelected}))
        // dispatch(fetchPins())
    }

    return ( 
        <form action="" className="savePin" onSubmit={handleSubmit}>
            <select id="" onClick={handleClick} className="dropdownPin">
                {boardOptions}

            </select>
            <input type="submit" value="Save" className="saveShow"/>
        </form>
     );
}
 
export default SavePin;