import { Routes, Route } from "react-router-dom";
import useThemeContext from "./hooks/useThemeContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

export default function App() {
  const { isDarkMode } = useThemeContext();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "theme__dark" : "theme__light"}`}
    >
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          {/* <Route path="connection" element={<Connection />} />
          <Route path="scores" element={<Scores />} />
          <Route path="about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
