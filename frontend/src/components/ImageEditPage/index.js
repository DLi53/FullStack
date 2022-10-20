import './index.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { fetchImage } from '../../store/images';
import { useState } from 'react';
import * as sessionActions from "../../store/images";



const ImageEditPage = () => {
    const dispatch = useDispatch()
    let {id} = useParams()
    id = Number(id)

    const image = useSelector(state => state.images)
    const imagedeets = (image && image[id])
    // const userdeets = useSelector(state => state.users[imagedeets.uploaderId])
    const currentUserId = useSelector(state => state.session.user.id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updated , setUpdated] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [redirectDelete, setRedirectDelete] = useState(false)



    useEffect(() => {
        dispatch(fetchImage(id))
    },[id])


    const handleSubmit = (e) => { 
        e.preventDefault()

        dispatch(sessionActions.editImage({id, title, description}))
        dispatch(fetchImage(id))
        setTimeout(setUpdated("Pin Successfully Updated!"), 2000)
        
        setTimeout(setRedirect(true), 5000)
    }

    const handleDelete = () => {
        const confirm = window.confirm(
            "Are you sure you want to delete this pin?"
        )
        if (!confirm) return;
        dispatch(sessionActions.deleteImage(id))
        setTimeout(setRedirectDelete(true), 5000)

    }

    const handleCancel = () => {
        setTimeout(setRedirect(true), 5000)
    }


    if (redirect) {
        return ( 
        <Redirect to={`/pins/${imagedeets.id}`} />
    )}

    if (redirectDelete) {
        return ( 
        <Redirect to={`/user/${currentUserId}`} />
    )}


    if(image) {return ( 
       <div className="imageShowPage">
            <div className="imageShowBox">
                <div className="leftSideShow" >
                        <img className="pictureUpload" src={imagedeets && imagedeets.photoUrl} alt="" />
                </div>

                <div className="rightSideShow">
                    <div className="insiderightSideShow">
                        <div className="topRight"> 
                            <h1>Update Pin</h1>
                            <div className="deleteImage" onClick={handleDelete}><i className="fa-solid fa-trash"></i></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input className="titleInput" type="text" 
                                value={title}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>

                            <input className="descriptionInput" 
                                id="" 
                                value={description}
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}>
                            </input>
                            <br />
                            {updated}
                            <div className="cancelUpdate">
                                <div className="cancelButton" onClick={handleCancel}>Cancel</div>
                                <input type="submit" value="Update" className='updateButton' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
    }}

export default ImageEditPage;