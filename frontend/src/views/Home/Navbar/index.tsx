import imgLogo from "@img/Logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 my-3">
      <nav>
        <ul className="flex flex-row justify-between items-center text-lightGris">
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
