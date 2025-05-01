import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black/70 text-white flex flex-col items-center justify-center px-4 py-16 sm:px-6 md:px-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Fale Conosco</h1>

      <p className="max-w-xl text-center mb-4 text-base">
        Se você tiver dúvidas, entre em contato conosco!
      </p>

      <p className="text-center text-lg font-semibold mb-6">
        Entre em contato:{" "}
        <a href="tel:(73)988756818" className="text-amber-100 hover:underline">
          (73) 98875-6818
        </a>
      </p>

      <div className="bg-white text-black rounded-lg shadow-md p-4 sm:p-6 w-full max-w-3xl">
        <div className="aspect-video w-full rounded overflow-hidden">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.614389258435!2d-39.27683862489014!3d-14.79073698571848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa5e69d3c28b%3A0x185dca7f863b20af!2sFino%20Gr%C3%A3o%20-%20Caf%C3%A9s%20Especiais!5e0!3m2!1spt-BR!2sbr!4v1746043454053!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
