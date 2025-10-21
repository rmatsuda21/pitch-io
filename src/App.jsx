import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";

import RelativePitch from "./components/RelativePitch.jsx";
import Chords from "./components/Chords.jsx";
import Landing2 from "./components/Landing2.jsx";
import Sandbox from "./components/Sandbox.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing2 />} />
        <Route path="/rp" element={<RelativePitch />} />
        <Route path="/chords" element={<Chords />} />
        <Route path="/sandbox" element={<Sandbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
