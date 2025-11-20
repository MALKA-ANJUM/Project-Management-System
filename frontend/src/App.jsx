import './App.css'
import { BrowserRouter, Routes, Route } from 'react';
import Login from './pages/Login';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
