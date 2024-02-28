import "../styles/login.css";

import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function Login({ users, handleLogin }) {

  const navigate = useNavigate();
  const { register, formState: {errors}, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    const userExist = users.find((user) => 
      user.username === data.username && user.password === data.password
    );

    if (userExist) {
      handleLogin(userExist);
      navigate("/city");
    } else {
      setError("Invalid username or password");
    }
  }
  
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input type="text" {...register('username', { required: 'You must enter an username'})} aria-invalid={errors.username ? "true" : "false"}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: 'You must enter a password'})} aria-invalid={errors.password ? "true" : "false"}/>
      </div>
      <div className="button-submit">
        <input type="submit" value="Login" />
      </div>
      <span>
        {errors.username && <p id='error'>{errors.username.message}</p>}
        {errors.password && <p id='error'>{errors.password.message}</p>}
        {error && <p>{error}</p>}
      </span>
    </form>
  )

}