import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchComments } from "../../store/comments"
import { fetchImage } from "../../store/images"
import { fetchUsers } from "../../store/users"
import EachComment from "./EachComment"
import CreateComment from "./CreateComment"
import './comment.css'

const Comments = () => {
   const dispatch = useDispatch()
    let {id} = useParams()

    const imagedeets = useSelector(state => state.images[id])
    // const userdeets = useSelector(state => state.users[comments && comments.commenterId])
    const currentUserId = useSelector(state => state.session.user.id)
    const allComments = useSelector(state => {
        let arr =[]
        Object.values(state.comments).forEach(comment => {

            if (comment.imageId === parseInt(id)) {
                arr.push(comment)
            }
        })
        return arr
    })

    const commentsbox = allComments.map(comment => { return <EachComment comment={comment} key={comment.id} /> })



    useEffect(() => {
        // dispatch(fetchImage(id))
        // dispatch(fetchUsers())
        dispatch(fetchComments())
    },[id])


    return ( 
        <div className="Comments">
            <h3>Comments: </h3>
            {commentsbox}
            <br />
            <div className="inputComment">
                <CreateComment></CreateComment>

            </div>
        </div>
     );
}
 
export default Comments;