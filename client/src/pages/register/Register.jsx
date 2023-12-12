import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import "./register.css";
import { makeRequest } from  '../../axios'
const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${makeRequest.defaults.baseURL}/auth/register`,
        credentials
      );
      if(res.status===200){
        navigate("/login"); 
      }else{
        navigate("/register"); 
      }
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Register
        </button>
        <div>
          <span>If You Have Already registered?</span>
          <Link to="/login">Login here</Link>
        </div>
        {error && <span className="error-message">{error}</span>}
      </div>
    </div>
    </>
  );
};

export default Register;
