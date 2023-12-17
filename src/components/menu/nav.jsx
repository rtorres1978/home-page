import IconMenuClose from "../icon/iconmenuclose";
import IconMenuOpen from "../icon/iconmenuopen";
import NavLink from "./navlink";
import { useRef, useState } from "react";

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const refNavbar = useRef(null);
  
  const openMenuClass =
    "absolute top-10 px-8 items-center lg:text-white flex w-full";

  const CloseMenuClass =
    "absolute top-10 px-8 py-4 lg:py-0 items-center flex w-full bg-white lg:bg-transparent text-black justify-between lg:justify-start ";

  const hanleClickMenu = () => {
    setActiveMenu(!activeMenu);
    
    refNavbar.current.querySelector('#navLinks').classList.toggle('hidden')
    refNavbar.current.querySelector('#navLinks').classList.add('flex', ['gap-8'])
    refNavbar.current.querySelector('#navBrand').classList.toggle('hidden')
  };

  return (
    <div className="relative">
      <nav
        ref={refNavbar}
        className={activeMenu ? CloseMenuClass : openMenuClass}
      >
        <button className="lg:hidden" onClick={hanleClickMenu}>
          {activeMenu ? (
            <IconMenuClose/>
          ) : (
            <IconMenuOpen />
          )}
        </button>

        <a
          href="#"
          className="mx-auto pr-[20px] text-4xl mb-3  lg:mx-0 lg:pr-20 lg:block text-white" id="navBrand" 
        >
          room
        </a>

        <div className="lg:flex lg:gap-6 hidden " id="navLinks">
          <NavLink text="home" />
          <NavLink text="shop" />
          <NavLink text="about" />
          <NavLink text="contact" />
          {/* <a href="#">shop</a>
                           <a href="#">about</a>
                           <a href="#">contact</a> */}
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
