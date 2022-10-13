import { Link } from "react-router-dom";

const ImageListItem = ({image}) => {
    // console.log(image.uploaderId);


    return ( 
        <div className="imageListItem" key={image.id}>
            <ul>
                <li><Link to={`/pins/${image.id}`}><img className="imgIdx" src={image.photoUrl} alt="" /></Link></li>
                {/* <li>ID: {image.id}</li> */}
                {/* <li>Title: {image.title}</li> */}
                {/* <li>Description: {image.description}</li>
                <li>Uploader_id: {image.uploaderId}</li> */}
                <br />
                {/* <li>URL: {image.photoUrl}</li> */}
                <br />
            </ul>
        </div>
     );
}
 
export default ImageListItem;