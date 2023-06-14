import React, { useEffect, useState } from "react";
import "boxicons";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const { handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("../../data/users.json");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const login = () => {
    let valid = true;
    let message = "";
    let found = false;
    if (!email) {
      valid = false;
      message = "Por favor introduzca un correo electrónico";
    } else if (!pass) {
      valid = false;
      message = "Por favor intruzca una contraseña";
    }

    let usr = users.find((user) => user.email === email);
    valid = validateCredentials();
    if (valid) {
      if (!usr) {
        valid = false;
        return alert(
          "No se encontró el correo electrónico en la base de datos"
        );
      }

      if (usr.password !== pass) {
        valid = false;
        return alert("Contraseña incorrecta");
      }
    }
    console.log(valid);
    if (valid) {
      alert(`Bienvenido ${usr.name}`);
    }
  };

  const validateCredentials = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!emailRegex.test(email)) {
      alert("El correo electrónico no es válido");
      return false;
    }

    if (!passwordRegex.test(pass)) {
      alert(
        "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un dígito"
      );
      return false;
    }
    return true
  };

  const change = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="login-container">
      <p className="gray">
        Hola, por favor ingresa tus datos para iniciar sesión
      </p>
      <form action="" className="login-form" onSubmit={handleSubmit(login)}>
        <input
          type="text"
          placeholder="Correo electrónico"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="wrapp-input">
          <span className="show-icon" onClick={change}>
            <box-icon name={showPass ? "hide" : "show"}></box-icon>
          </span>
          <input
            type={showPass ? "text" : "password"}
            placeholder="Contraseña"
            className="form-input"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <button className="login-button primary-button">Iniciar sesion</button>
      </form>
    </div>
  );
};

export default Login;
