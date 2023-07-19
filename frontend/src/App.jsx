import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="theme__light min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="game" element={<Game />} /> */}
          {/* <Route path="connection" element={<Connection />} />
          <Route path="scores" element={<Scores />} />
          <Route path="about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
