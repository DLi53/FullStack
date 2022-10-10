// frontend/src/components/LoginFormModal/LoginForm.js

import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./SignUpForm.css";

function SignUpForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // console.log(password);
    // console.log(username);

    dispatch(sessionActions.signup({ username, password }))
      // .catch(async (res) => {
      //   let data;
      //   try {
      //     // .clone() essentially allows you to read the response body twice
      //     data = await res.clone().json();
          
      //   } catch {
      //     data = await res.text(); // Will hit this case if the server is down
      //   }
      //   if (data?.errors) setErrors(data.errors);
      //   else if (data) setErrors([data]);
      //   else setErrors([res.statusText]);
      // })


      .then(
        
        dispatch(sessionActions.login({username, password }))
        )

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;