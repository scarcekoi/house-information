import { Routes, Route } from "react-router-dom";
import App from "./pages/App.tsx";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </>
  );
}

export default Index;