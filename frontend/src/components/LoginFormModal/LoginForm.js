// frontend/src/components/LoginFormModal/LoginForm.js

import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import Loading from "../Loading/Loading";

function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false)

  const demoSignIn = () => {
    setUsername("DemoUser")
    setPassword("Password1")
    const user = {username: 'DemoUser', password: 'Password1'}
    setLoading(true)
    return dispatch(sessionActions.login(user))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true)
    return dispatch(sessionActions.login({ username, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='modalDetails'>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label className="modalUsername">
        Username
        <br />
        <input
          className="modalInputs"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </label>
      <br />
      <label>
        Password
        <br />
        <input
          className="modalInputs"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </label>
      <br />
      <button className="modalButton" type="submit">Log In</button>
      <br />
      <div className="or">or</div>
      <br />
      <button className="modalButtonDemo" onClick={demoSignIn}>Sign In with Demo User</button>
      {loading ? <Loading/> : ''}
    </form>
  );
}

export default LoginForm;