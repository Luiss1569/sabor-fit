"use client";

import Button from "@/components/Button";
// import { postFormData } from "@/services/api";
// import formData from "@/interfaces/clientRequests";

const headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ba518fd4f5fd811a7fedb4e23d51626ab4461011d1ba32969821e6a1f6f40cb649b9a7057e5b767acba839683ee6ad594badcfe91a6962b3e86912712e4cf94f3528cb45a2c5e8f4424b87a6ca39a96dc821cddccb9f6be90749789b6edacee43232b17ed3eea3c733f1e4a543ddbd84fcc189f9ba385bcc476ffc9463d0bd71`,
});

export default function FaleConosco() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      Name: formData.get("Name") as string,
      Email: formData.get("Email") as string,
      Number: formData.get("Number") as string,
      City: formData.get("City") as string,
      State: formData.get("State") as string,
      Subject: formData.get("Subject") as string,
      Message: formData.get("Message") as string,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:1337/api/clients-requests",
        {
          method: "POST",
          headers,
          body: JSON.stringify({ data }),
        }
      );
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }

      const responseData = await response.json();

      console.log(responseData);
    } catch (error: any) {
      console.log(error.response);
    }

    console.log(data);
  }

  return (
    <section className="flex bg-background-fale-conosco bg-no-repeat bg-center bg-cover md:justify-end">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-lg md:self-end gap-6 bg-black/60 px-5 py-5"
        id="contactForm"
      >
        <div>
          <p className="text-white font-title text-4xl text-center md:text-5xl">
            Fale Conosco
          </p>
          <p className="text-secondary text-center md:text-lg text-md">
            Estamos te esperando
          </p>
        </div>
        <input
          type="text"
          name="Name"
          placeholder=" Nome"
          className="rounded-md h-8"
          required
        />
        <input
          type="text"
          name="Email"
          placeholder=" Email"
          className="rounded-md h-8"
          required
        />
        <input
          type="text"
          name="Number"
          placeholder=" Telefone"
          className="rounded-md h-8"
          required
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="City"
            placeholder=" Cidade"
            className="w-8/12 rounded-md h-8"
            required
          />
          <input
            type="text"
            name="State"
            placeholder=" Estado"
            className="w-4/12 rounded-md h-8"
            required
          />
        </div>
        <input
          type="text"
          name="Subject"
          placeholder=" Assunto"
          className="rounded-md h-8"
          required
        />
        <textarea
          name="Message"
          placeholder=" Mensagem"
          rows={5}
          className="rounded-md"
          required
        ></textarea>
        <Button
          variant="primary"
          className="flex self-end justify-center w-8 items-center h-4"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </section>
  );
}
