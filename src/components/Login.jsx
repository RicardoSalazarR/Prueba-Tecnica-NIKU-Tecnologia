import React, { useState } from "react";
import "boxicons";
import { useForm } from "react-hook-form";

const Login = () => {
  const { handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");

  const login = () => {
   
  };

  const change = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="login-container">
      <p className="gray">Hola, por favor ingresa tus datos para iniciar sesión</p>
      <form action="" className="login-form" onSubmit={handleSubmit(login)}>
        <input
          type="text"
          placeholder="Usuario ó email"
          className="form-input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <div className="wrapp-input">
          <span className="show-icon" onClick={change}>
            <box-icon name={showPass ? "hide" : "show"}></box-icon>
          </span>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Contraseña"
            className="form-input"
          />
        </div>
        <button className="login-button primary-button">Iniciar sesion</button>
      </form>
    </div>
  );
};

export default Login;
