import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/boards";


const BoardCreate = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const currentUserId = useSelector(state => state.session.user.id)
    const [redirect, setRedirect] = useState(false)



    const handleSubmit = (e) => { 
        e.preventDefault()

        dispatch(sessionActions.createBoard({title, currentUserId}))
        dispatch(sessionActions.fetchBoards())
        setTimeout(setRedirect(true), 5000)
    }


    if (redirect) {
        return ( 
        <Redirect to={`/user/${currentUserId}`} />
    )}


return ( 
       <div className="imageShowPage">
            <div className="imageShowBox">
                <form onSubmit={handleSubmit}>
                    <h2>Create a New Board</h2>

                    <br />
                    <br />
                    <h3>Board Title</h3>
                    <input type="text"
                        className="titleInput"
                        value = {title}
                        placeholder = 'Board Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <br />
                    <input className="saveShow" type="submit" value = 'Create' />
                </form>

                   
            </div>
        </div>
     );
}
export default BoardCreate;