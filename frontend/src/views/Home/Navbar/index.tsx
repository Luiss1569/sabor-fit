"use client"
import { useState } from "react";
import imgLogo from "@img/Logo.png";
import Image from "next/image";
import { FaInstagram, FaWhatsapp,FaTimes, FaBars, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="h-20 my-3">
      <nav className="flex justify-between items-center text-lightGris">
        <div className="flex flex-col w-full md:hidden">
        <div className="flex px-10 justify-between w-full">
          <Image src={imgLogo} alt="Logo" />
          {isMenuOpen ? (
            <button onClick={toggleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button onClick={toggleMenu}>
              <FaBars/>
            </button>
          )}
        </div>
        <div className={`${isMenuOpen ? "flex flex-col z-20 relative px-10 bg-white gap-4" : "hidden"}`}>
          <ul className="flex flex-col">
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Quem somos</a>
            </li>
          </ul>
          <div className="flex gap-4 justify-start w-full">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-10 h-10"/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-10 h-10"/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="w-10 h-10"/>
            </a>
          </div>
        </div>
        </div>
        <ul className="md:flex justify-between items-center hidden w-full mx-20">
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <Image src={imgLogo} alt="Logo" />
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Quem somos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
