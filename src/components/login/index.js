import axios from "axios";
import { useState } from "react";
import "./style.css";
const Login = ({ setDisplay }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState({});

  const handleLogin = () => {
    setDate({ username: username, password: password });
    setUserName("");
    setPassword("");
    handlePost();
  };
  const handlePost = () => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", date)
      .then((response) => {
        setDisplay(response.request.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="containerForm">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Logar</button>
    </div>
  );
};

export default Login;
