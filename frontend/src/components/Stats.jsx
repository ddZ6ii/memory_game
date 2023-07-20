import { useThemeContext } from "../contexts/ThemeContext";

export default function Stats() {
  const { isDarkMode } = useThemeContext();

  const darkTheme = isDarkMode ? "is__dark" : "";

  return (
    <div className="stats">
      <div className={`stats__item ${darkTheme}`}>
        <h3 className="font-normal">Time</h3>
        <span className="text-xl tracking-wider">01:35</span>
      </div>
      <div className={`stats__item ${darkTheme}`}>
        <h3 className="font-normal">Moves</h3>
        <span className="text-xl tracking-wider">17</span>
      </div>
    </div>
  );
}
