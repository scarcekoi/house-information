import React from "react";
import { Routes, Route } from "";
import App from "./pages/App.tsx";
import Login from "Lgn.tsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;