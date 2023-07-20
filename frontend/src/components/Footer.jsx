import { useEffect, useState } from "react";

import { useThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useThemeContext();
  const [currentYear, setcurrentYear] = useState(null);
  useEffect(() => {
    setcurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={`flex min-h-[40px] items-center justify-center px-6 py-3 ${
        isDarkMode
          ? "bg-overlay text-neutral-lightest"
          : "bg-neutral-default text-neutral-darkest "
      }`}
    >
      <p className="text-xs md:text-base">
        &copy; {currentYear} Denis Dezest - All Rights Reserved
      </p>
    </footer>
  );
}
