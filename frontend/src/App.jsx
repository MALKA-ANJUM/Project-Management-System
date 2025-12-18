import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./context/AuthContext";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route
					path="/"
					element={
					<PrivateRoute>
						<Dashboard />
					</PrivateRoute>
					}
				/>

				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />

				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
