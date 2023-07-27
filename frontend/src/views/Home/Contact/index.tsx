"use client";
import Button from "@/components/Button";
import React, { useCallback } from "react";

export default function FaleConosco() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      const formData = new FormData(event.currentTarget);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res?.ok) {
        alert("Mensagem enviada com sucesso!");
        setSubmitted(true);
      } else {
        alert("Erro ao enviar mensagem!");
      }

      setLoading(false);
    },
    []
  );

  return (
    <section
      className="flex bg-background-fale-conosco bg-no-repeat bg-center bg-cover md:justify-end"
      id="contact"
    >
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
        {submitted ? (
          <div className="flex flex-col gap-4">
            <p className="text-white text-center">
              Obrigado por entrar em contato conosco!
            </p>
          </div>
        ) : (
          <>
            {" "}
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
              className="flex self-end justify-center w-8 items-center h-4 rounded-md disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </>
        )}
      </form>
    </section>
  );
}
