import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="#home">
        T R Shruthika
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden mobile-nav">
          <ul className="flex flex-col text-white m-0 p-0">
            <li className="mb-2">
              <a href="#home" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#projects" onClick={() => setToggleMenu(false)}>
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#resume" onClick={() => setToggleMenu(false)}>
                Resume
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setToggleMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
