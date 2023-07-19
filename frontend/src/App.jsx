import { Routes, Route } from "react-router-dom";

import Navbar from "./components/utilities/Navbar";
import Home from "./pages/Home";
import Footer from "./components/utilities/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen">
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
        <Footer />
      </main>
    </div>
  );
}
