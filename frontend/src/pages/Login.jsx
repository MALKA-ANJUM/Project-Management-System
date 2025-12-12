import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      const res = await api.post("/api/auth/login", { email, password });
      login(res.data.user, res.data.token);
      navigate("/"); // ✅ Dashboard
  
  };

  return (
    <AuthLayout title="Welcome Back">
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>

      <p className="text-center mt-3">
        Don’t have an account? <Link to="/register">Register</Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
