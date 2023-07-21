import { useNavigate } from "react-router-dom";

import { useThemeContext } from "../contexts/ThemeContext";

export default function NotFound() {
  const navigate = useNavigate();
  const { isDarkMode } = useThemeContext();

  return (
    <section className="min-h-screen justify-center md:min-h-screen">
      <div className="flex flex-col items-center gap-6">
        {isDarkMode ? (
          <img
            className="rounded-xl md:h-72"
            src="../assets/img/404_Dark.jpg"
            alt="error_404"
          />
        ) : (
          <img
            className="rounded-sm md:h-72"
            src="../assets/img/404.jpg"
            alt="error_404"
          />
        )}

        <h1>Ooops... Page Not Found!</h1>
        <h2>Looks like you lost your way</h2>
        <button
          type="button"
          className="btn btn__primary__default m-auto"
          onClick={() => navigate("/")}
        >
          Take Me Home
        </button>
      </div>
    </section>
  );
}
