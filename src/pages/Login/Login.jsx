import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import miImagen from "./../../assets/pet.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      navigate("/home");
    } catch (err) {
      setError("Credenciales inválidas. Verifica tu correo o contraseña.");
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  };

  const isFormValid = email && password && isValidEmail(email);

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 p-4 bg-[#FF6752] flex items-center justify-center">
        <div class="w-80 h-80 bg-white rounded-full flex items-center justify-center">
          <img src={miImagen} alt="Mi SVG" className="w-40 h-40" />
        </div>
      </div>
      <div className="w-1/2 p-4 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-[448px]">
          <span
            className="uppercase text-[#4D4F5C] bg-white font-bold border-l-8 p-1 w-full mb-2 pl-5"
            style={{ borderColor: "#FF6752" }}
          >
            Bienvenido
          </span>

          <form
            onSubmit={handleSubmit}
            className="mt-[20px] flex flex-col gap-y-2 "
          >
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white shadow-md opacity-100 h-[48px] pl-4"
            />
            <input
              type="password"
              placeholder="CONTRASEÑA"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white shadow-md opacity-100 h-[48px] pl-4"
            />
            <span className="text-gray-300 text-right font-light mt-4 text-[13px] cursor-pointer">
              ¿Olvidaste tu contraseña?
            </span>
            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="bg-[#4487FF] rounded-[38px] py-4 px-10 text-4 text-white w-fit m-auto mt-[46px] mb-[32px]"
            >
              {loading ? <span>Loading...</span> : "INICIAR SESIÓN"}
            </button>
            <span className="text-[#A4AFB7] text-center font-light text-[13px] cursor-pointer">
              AÚN NO TENGO CUENTA REGISTRARSE
            </span>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
