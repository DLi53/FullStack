import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import csrfFetch from '../../store/csrf';
import { fetchImages } from '../../store/images';

import './index.css' 

const ImageCreatePage = () => {
    const dispatch = useDispatch()
    const [photoFile, setPhotoFile] = useState(null);
    // const [imgData, setImgData] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null)
    const sessionUser = useSelector((state) => state.session.user)
    const user = useSelector((state) => state.users[sessionUser.id])

    const [uploaderId, setUploaderId] = useState(user.id)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [uploaded, setUploaded] = useState('')
    const [redirect, setRedirect] = useState(false)

    

    const handleFile = e => {
        const file = e.currentTarget.files[0];
        setPhotoFile(file);
        
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPhotoUrl(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
    }


    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image[title]', title);
        formData.append('image[description]', description);
        formData.append('image[uploader_id]', uploaderId);

        if (photoFile) {
            formData.append('image[photo]', photoFile);
        }
        const response = await csrfFetch('/api/images', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            const message = await response.json();
            // console.log(message.message);
            setTitle("");
            setPhotoFile(null);
            setPhotoUrl(null);

            dispatch(fetchImages())
            setUploaded('Photo has been uploaded!')
            setTimeout(setRedirect(true), 5000)

        }
    }

    if (redirect) {
        return ( 
        <Redirect to={`/user/${sessionUser.id}`} />
    )}


    return ( 
        <div className="imageCreatePage">
            <div className="imageCreateBox">
                <form onSubmit={handleSubmit}>


                    <div className="uploadArea">
                        <div className="leftSide">
                            <div ><img className="pictureUpload" src={photoUrl} alt="" /></div>
                            <input 
                                className='uploadButton' 
                                type="file"
                                onChange={handleFile}>
                                
                            </input>
                            <h1><i className="fa-solid fa-circle-arrow-up"></i></h1>
                            <p className='dragdrop'>Drag and drop or click to upload</p>
                        </div>

                        <div className="rightside">
                            <div className="saveArea">
                                <input className="saveButton" type="submit" value="Save"/>
                             </div>

                            <input className="titleInput" type="text" 
                                    value={title}
                                    placeholder="Add your title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                            ></input>


                            <div className="username">
                                <img className="createProfilePic" src={user && user.profilePicUrl} alt="" />
                                {user && user.username}
                            </div>
                            <input className="descriptionInput" 
                            id="" 
                            value={description}
                            placeholder="Tell everyone what your Pin is about"
                            onChange={(e) => setDescription(e.target.value)}>
                            </input>
                            <br />
                            <br />
                            {uploaded}
                        </div>
                    </div>
                </form>

                
            </div>
        </div>
     );
}
 
export default ImageCreatePage;