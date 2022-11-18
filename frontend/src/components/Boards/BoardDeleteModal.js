import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as sessionActions from "../../store/boards";


const BoardDeleteModal = () => {
    const dispatch = useDispatch()
    const {boardId} = useParams()
    const currentUserId = useSelector(state => state.session.user.id)
    const [redirectDelete, setRedirectDelete] = useState(false)


    const handleDelete = () => {
        // console.log('delete')
        dispatch(sessionActions.deleteBoard(`${currentUserId}`, boardId))
        setTimeout(setRedirectDelete(true), 5000)
    }

    if (redirectDelete) {
        return ( 
        <Redirect to={`/user/${currentUserId}`} />
    )}
    
    return ( 
        <div className="BoardDeleteModal">
            <div className="BoardDeleteQuestion">Are you sure you want to delete this board?</div>

            <button className="saveShow" onClick={handleDelete}>Delete</button>
        </div>
     );
}
 
export default BoardDeleteModal;