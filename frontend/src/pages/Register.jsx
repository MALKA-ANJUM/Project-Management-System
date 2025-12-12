import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/api/auth/register", form);
    navigate("/login"); // ✅ Redirect to login
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="btn btn-success w-100">Register</button>
      </form>

      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
