import Title from "@/components/Title"
import {
    FaInstagram,
    FaLinkedin,
    FaTwitter
  } from "react-icons/fa";

export default function QuemSomos(){
    return(
        <section className="flex flex-col gap-20 md:gap-12 py-0">
            <Title label="Mas eai?">Quem Somos</Title>
            <div className="flex flex-col flex-wrap items-center gap-12 pb-10 md:gap-6 md:flex-row md:justify-center rounded-3xl">
                <div className="flex flex-col-reverse bg-cover bg-center w-72 h-96 bg-background-pessoa-1">
                    <div className="bg-white flex flex-col items-center w-10/12 m-4 rounded-3xl px-10 pt-2 pb-3 gap-2">
                        <p>Steve Jobs</p>
                        <p className="font-extralight">CEO</p>
                        <div className="flex gap-6">
                            <a href="http://" target="_blank"><FaInstagram style={{ color: '#0A66C2' }}/></a>
                            <a href="http://" target="_blank"><FaLinkedin style={{ color: '#0A66C2' }}/></a>
                            <a href="http://" target="_blank"><FaTwitter style={{ color: '#55ACEE' }}/></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse bg-cover bg-center w-72 h-96 bg-background-pessoa-2 rounded-3xl">
                    <div className="bg-white flex flex-col items-center w-10/12 m-4 rounded-3xl px-10 pt-2 pb-3 gap-2">
                        <p>Elon Musk</p>
                        <p className="font-extralight">CFO</p>
                        <div className="flex gap-6">
                            <a href="http://" target="_blank"><FaInstagram style={{ color: '#0A66C2' }}/></a>
                            <a href="http://" target="_blank"><FaLinkedin style={{ color: '#0A66C2' }}/></a>
                            <a href="http://" target="_blank"><FaTwitter style={{ color: '#55ACEE' }}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}