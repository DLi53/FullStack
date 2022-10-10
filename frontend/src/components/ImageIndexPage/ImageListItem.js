const ImageListItem = ({image}) => {
    console.log(image.uploaderId);

    return ( 
        <div className="imageListItem" key={image.id}>
            <ul>
                <li>ID: {image.id}</li>
                <li>Title: {image.title}</li>
                <li>Description: {image.description}</li>
                <li>Uploader_id: {image.uploaderId}</li>
                <br />
            </ul>
        </div>
     );
}
 
export default ImageListItem;