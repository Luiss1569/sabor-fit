"use client";
import { useState } from "react";
import imgLogo from "@img/Logo.png";
import Image from "next/image";
import {
  FaInstagram,
  FaWhatsapp,
  FaTimes,
  FaBars,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";

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
            <Link href="/">
              <Image src={imgLogo} alt="Logo" />
            </Link>
            {isMenuOpen ? (
              <button onClick={toggleMenu}>
                <FaTimes />
              </button>
            ) : (
              <button onClick={toggleMenu}>
                <FaBars />
              </button>
            )}
          </div>
          <div
            className={`${
              isMenuOpen
                ? "flex flex-col z-20 relative px-10 py-5 bg-white gap-4 shadow-lg transition-all"
                : "w-o hidden transition-all"
            }`}
          >
            <ul className="flex flex-col">
              <li>
                <Link href="/about">Sobre</Link>
              </li>
              <li>
                <Link href="/product">Produtos</Link>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a href="#about">Quem somos</a>
              </li>
            </ul>
            <div className="flex gap-4 justify-start w-full">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-7 h-7" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        <ul className="md:flex justify-between items-center hidden w-full mx-20">
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/product">Produtos</Link>
          </li>
          <li>
            <Link href="/">
              <Image src={imgLogo} alt="Logo" />
            </Link>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#about">Quem somos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
