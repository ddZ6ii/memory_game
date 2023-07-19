// Packages
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setcurrentYear] = useState(null);
  useEffect(() => {
    setcurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="theme__dark px-6 py-3 text-center md:px-12 md:py-4">
      <p className="text-xs md:text-base">
        &copy; {currentYear} Denis Dezest - All Rights Reserved
      </p>
    </footer>
  );
}
