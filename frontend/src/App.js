import { Route, Switch } from "react-router-dom";
import ImageIndexPage from "./components/ImageIndexPage";
import NavBar from "./components/NavBar";
import Modal from './components/Modal/modal.jsx';
import ImageShowPage from "./components/ImageShowPage";
import ImageCreatePage from "./components/ImageCreatePage";




function App() {

  return (
    <>
      {/* <Modal /> */}
      
      <NavBar/>

      <Switch>
        <Route exact path="/">
          <ImageIndexPage/>
        </Route>
        <Route path="/pins/:id">
          <ImageShowPage/>
        </Route>
        <Route path="/pin-builder">
          <ImageCreatePage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
