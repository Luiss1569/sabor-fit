import imgLogo from "@img/Logo2.png";
import instagramLogo from "@img/instagram-logo.png";
import facebookLogo from "@img/facebook-logo.png";
import whatsappLogo from "@img/whatsapp-logo.png";
import mapMaker from "@img/Vector.png";
import mapa from "@img/Mapa.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white bg-gris-light pt-8 pb-16 items-center">
      <div className="flex gap-16">
      <div className="flex flex-col ml-20 gap-8 w-7/12 text-justify">
        <Image src={imgLogo} alt="Logo" />
        <p>
          Nossos produtos são elaborados com ingredientes de alta qualidade,
          pensados para promover uma alimentação saudável e saborosa.
          Priorizamos o seu bem-estar e buscamos inspirar uma vida ativa e
          equilibrada. Conte conosco para nutrir seu corpo e transformar seu
          estilo de vida.{" "}
        </p>
        <p>Acompanhe-nos nas redes sociais e descubra o universo SaborFit!</p>
        <div className="flex gap-4">
          <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={instagramLogo} alt="Logo instagram" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={whatsappLogo} alt="Logo whatsapp" /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={facebookLogo} alt="Logo facebook" /></a>
        </div>
      </div>
      <div className="flex flex-col mr-28 gap-4 w-56">
        <p>Local</p>
        <hr></hr>
        <div className="flex gap-3">
            <Image src={mapMaker} alt="Map Maker"></Image>
            <div className="">
                <p>asdasdasa 1123</p>
                <p>jbasdiu, jspdoiasopd</p>
            </div>
        </div>
        <Image src={mapa} alt="Localização no mapa"></Image>
      </div>
      </div>
      <div>
        <p>© 2023 SaborFit. Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
