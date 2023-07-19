// Packages
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setcurrentYear] = useState(null);
  useEffect(() => {
    setcurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-neutralDarkest px-6 py-3 md:h-20 md:flex-row md:justify-between md:px-12 md:py-4">
      <p className="text-xs md:text-base">
        &copy; {currentYear} Denis Dezest - All rights reserved
      </p>
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/">
          <img src="../assets/icon/instagram.svg" alt="instagram" width="24" />
        </a>
        <a href="https://twitter.com/">
          <img src="../assets/icon/twitter.svg" alt="twitter" width="24" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="../assets/icon/facebook.svg" alt="facebook" width="24" />
        </a>
      </div>
    </footer>
  );
}
