import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Lgn";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Index;