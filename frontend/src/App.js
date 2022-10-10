import { Route, Switch } from "react-router-dom";
import ImageIndexPage from "./components/ImageIndexPage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
// import Modal



function App() {
  return (
    <>
      {/* <Modal /> */}
      <Switch>
        <Route exact path="/">
          {/* <SplashPage /> */}
          <ImageIndexPage/>
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
