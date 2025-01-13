import { Routes, Route, Navigate } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Login";
import { useAuth } from "./components/AuthContext";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function Index() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute element={<App />} />} />
    </Routes>
  );
}

export default Index;