import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBoards } from "../../store/boards";
import './index.css'
import ImageListItem from "../ImageIndexPage/ImageListItem";
import Masonry from "react-masonry-css";

const UserShow = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const userdeets = useSelector(state => state.users[id])
    const boarddeets = useSelector(state => state.boards[id])
    const [createShow, setCreateShow] = useState("Create")
    const userImages = useSelector(state => {
        let arr = []   
        Object.values(state.images).forEach(image => {
            if(image.uploaderId === parseInt(id)) {
                arr.push(image)
            }
        })
        return arr
    })


    useEffect((e) => {
        dispatch(fetchBoards(id))
        // dispatch(fetchUser(id))
    }, [])

    const breakpointColumnsObj = {
        default: 7,
        1700: 6,
        1500: 5,
        1200: 4,
        1000: 3,
        700: 2,
        500: 1
    };

    const allImages = userImages.map(image => {return <ImageListItem image={image} key={image.id} user={userdeets}/>})
    const imageListItems =                 
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {allImages}
                </Masonry>



    const shown = createShow === "Show" ? "created images here" :  imageListItems

    return ( 

        <div className="userShow">
            <img className="userShowPic" src={userdeets.profilePicUrl} alt="" />
            <h1>{userdeets.username}</h1>
            <p>@{userdeets.username}</p>
            <br />
            <div className="createshow">
                <div 
                    className="createdButton"
                    value = "Create"
                    onClick = {(e) => setCreateShow("Create")}
                >Created</div>

                <div className="showButton"
                    value = "Show"
                    onClick = {(e) => setCreateShow("Show")}
                    >Show</div>
            </div>
            <br />
            <div className="CreateShowSection">
                {shown}
            </div>

        </div>
     );
}
 
export default UserShow;