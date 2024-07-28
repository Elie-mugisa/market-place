import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import Sinscrire from "./screens/auth/Sinscrire";
import Seconnecter from "./screens/auth/Seconnecter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Sinscrire />} />
        <Route path="/login" element={<Seconnecter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
