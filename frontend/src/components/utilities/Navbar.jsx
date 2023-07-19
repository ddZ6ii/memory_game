// Components
import NavbarMobile from "./NavbarMobile";
import NavBarDesktop from "./NavbarDesktop";

export default function Navbar() {
  return (
    <>
      <nav className="md:hidden">
        <NavbarMobile />
      </nav>
      <nav className="hidden md:block">
        <NavBarDesktop />
      </nav>
    </>
  );
}
