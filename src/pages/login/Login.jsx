import React from "react";
import "./Login.scss";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {

  const navigate = useNavigate();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleSignUp = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === "john32" && password === "87654321") {
      localStorage.setItem("x-auth-token", "fake token");
      navigate("/admin");
      toast.success("Добро пожаловать");
    } else {
      toast.error("Ошибка в логине или в пароле!");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSignUp}>
        <h2 className="title">Login</h2>

        <input
          value={formData.username}
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="off"
          required
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
