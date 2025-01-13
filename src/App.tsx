import { Routes, Route, Navigate } from "react-router-dom";
import App from "./pages/App.tsx";
import Login from "./pages/Lgn.tsx";
import { useAuth } from "./components/AuthContext";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Index;