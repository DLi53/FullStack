import './index.css' 

const ImageCreatePage = () => {
    return ( 
        <div className="imageCreatePage">
            <div className="imageCreateBox">
                <form action="">


                    <div className="uploadArea">
                        <div className="leftSide">

                            <h1><i class="fa-solid fa-circle-arrow-up"></i></h1>
                            <>Drag and drop or click to upload</>
                            <input className='uploadButton' type="file"></input>
                        </div>

                        <div className="rightside">
                            <div className="saveArea">
                                <input className="saveButton" type="submit" value="Save"/>
                             </div>

                            <input type="text" placeholder='Add your title'></input>


                            <p>Username Here</p>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Description here"></textarea>

                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ImageCreatePage;