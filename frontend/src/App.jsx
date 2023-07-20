import { Routes, Route } from "react-router-dom";

import { useThemeContext } from "./contexts/ThemeContext";
import { useAuthContext } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

export default function App() {
  const { isDarkMode } = useThemeContext();
  const { isAuthenticated } = useAuthContext();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "theme__dark" : "theme__light"}`}
    >
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated ? (
            <>
              <Route path="/settings" element={<Settings />} />
              {/* <Route path="game" element={<Game />} /> */}
              {/* <Route path="scores" element={<Scores />} /> */}
            </>
          ) : null}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
