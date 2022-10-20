import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment, fetchComments } from "../../store/comments";

const CreateComment = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [description, setDescription] = useState('')
    const [refresh, setRefresh] = useState(false)

    const currentUserId = useSelector(state => state.session.user)

    const handleSubmit =() => {
        dispatch(createComment({
            description: description,
            image_id: id
        }))
        setRefresh(true)
    }

    useEffect(() => {
        dispatch(fetchComments())
    },[refresh])

    
    return ( 
        <form className="createComment" onSubmit={handleSubmit}>
            <img className="profileIconComment" src={currentUserId && currentUserId.profilePicUrl} alt="" />
            <input type="text" className="descriptionInput" value={description} placeholder="Your comment here" onChange = {(e) => setDescription(e.target.value)}/>
            <input type="submit" value="Done"  className="doneComment"/>
        </form>
     );
}
 
export default CreateComment;