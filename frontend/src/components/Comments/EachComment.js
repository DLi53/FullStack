import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../store/comments";
import { fetchUsers } from "../../store/users";


const EachComment = ({comment}) => {
    const dispatch = useDispatch()
    const commentUser = useSelector(state => {
        let arr =[]
        Object.values(state.users).forEach(user => {

            if (user.id === parseInt(comment.commenterId)) {

                arr.push(user)
            }
        })
        return arr[0]
    })


    useEffect(() => {

        dispatch(fetchUsers())
    },[])


    const handleDelete = () => {
        dispatch(deleteComment(comment.id))
    }

    return ( 
        <div className="eachComment">
            <div className="leftsideComment">
                <img className="profileIconComment" src={commentUser && commentUser.profilePicUrl } alt="" />
                <div className="commentUsername">{commentUser && commentUser.username}</div>
                <div className="commentDescription"> {comment.description} </div>
            </div>
            <div className="dateComment">
                <div className="commentDate">{comment.createdAt.slice(5,10)}</div>
                <div className="commentDelete" onClick={handleDelete}><i className="fa-sharp fa-solid fa-trash"></i></div>
            </div>
        </div>
     );
}
 
export default EachComment;