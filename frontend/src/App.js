import { Route, Switch } from "react-router-dom";
import ImageIndexPage from "./components/ImageIndexPage";
// import LoginFormContainer from "./components/session_form/login_form_container";
// import SignupFormContainer from "./components/session_form/signup_form_container";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";
import Modal from './components/Modal/modal.jsx';
import ImageShowPage from "./components/ImageShowPage";



function App() {
  return (
    <>
      {/* <Modal /> */}
      
      <NavBar/>

      <Switch>
        <Route exact path="/">
          {/* <SplashPage /> */}
          <ImageIndexPage/>
        </Route>
        <Route path="/pins/:id">
          <ImageShowPage/>
        </Route>
        <Route path="/signup">
          {/* <SignupFormContainer /> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
