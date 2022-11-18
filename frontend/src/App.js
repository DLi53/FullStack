import { Redirect, Route, Switch } from "react-router-dom";
import ImageIndexPage from "./components/ImageIndexPage";
import NavBar from "./components/NavBar";
import Modal from './components/Modal/modal.jsx';
import ImageShowPage from "./components/ImageShowPage";
import ImageCreatePage from "./components/ImageCreatePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "./store/images";
import { fetchUsers } from "./store/users";
import UserShow from "./components/UserShow";
import ImageEditPage from "./components/ImageEditPage";
import BoardCreate from "./components/Boards/boardCreate";
import { fetchBoards } from "./store/boards";
import { fetchPins } from "./store/pins";
import BoardShow from "./components/Boards/boardShow";



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
    //     dispatch(fetchImages())
        dispatch(fetchUsers())
    //     dispatch(fetchBoards())
    //     dispatch(fetchPins())
    },[])
    const sessionUser = useSelector((state) => state.session.user);


  return (
    <>
      {/* <Modal /> */}
      
      <NavBar/>
{/* { sessionUser ?  */}
      <Switch>
  


        <Route path="/user/:id">
          <UserShow/>
        </Route>
        <Route path="/pins/:id/edit">
          <ImageEditPage/>
        </Route>
        <Route path="/pins/:id">
          <ImageShowPage/>
        </Route>
        <Route path="/pin-builder">
          <ImageCreatePage/>
        </Route>
        <Route path="/board/:boardId">
          <BoardShow/>
        </Route>
        <Route path="/board-builder">
          <BoardCreate/>
        </Route>

        <Route exact path="/">
          <ImageIndexPage/>
        </Route>
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>



      {/* : 
       <Switch>
        <Route exact path="/">
          <ImageIndexPage/>
        </Route>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      } */}
    </>
  );
}

export default App;
