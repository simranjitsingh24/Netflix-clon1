import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Popup from "../src/Component/Movie-popup/Popup";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Popup" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
