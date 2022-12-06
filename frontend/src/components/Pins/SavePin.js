import './pin.css'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBoards } from '../../store/boards';
import { fetchImages } from '../../store/images';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { createPin, fetchPins } from '../../store/pins';

const SavePin = ({imageId}) => {
    const currentUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const [redirect, setRedirect] = useState(false)
    const {id} = useParams()

    // const boards = useSelector(state => {
    //     let arr = []
    //     Object.values(state.boards).forEach(board => {
    //         if (board.userId === currentUser.id) {
    //             arr.push(board)
    //         }
    //     })
    //     return arr
    // })

    const [boardSelected, setBoardSelected] = useState(currentUser.boards[0])
    // console.log(boardSelected)

    const handleClick = (e)=> {
        // e.preventDefault()
        console.log(boardSelected)
        setBoardSelected(e.target.value)
        console.log(boardSelected)
    }

  
    // console.log(boardSelected)

    const boardOptions = currentUser.boards.map(
        board => <option 
                    key={board.id} 
                    value ={board.id}

                    >{board.title}</option> )


    useEffect(() => {

        dispatch(fetchBoards(currentUser.id))
    },[])



    const handleSubmit = () => {
   
        console.log(imageId, boardSelected.id)
        dispatch(createPin({image_id: imageId, board_id: `${boardSelected}`}))
        // .then(()=> { history.push(`/user/${currentUser.id}`)})
        dispatch(fetchPins())
        setTimeout(setRedirect(true), 5000)
    }

    if (redirect) {
        return ( 
        <Redirect to={`/user/${currentUser.id}`} />
    )}


    return ( 
        <form action="" className="savePin" onSubmit={handleSubmit}>
            <select id="" onChange={handleClick} className="dropdownPin">
                {boardOptions}

            </select>
            <input type="submit" value="Save" className="saveShow"/>
        </form>
     );
}
 
export default SavePin;