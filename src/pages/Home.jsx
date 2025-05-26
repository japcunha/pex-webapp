import { useState, useEffect } from "react";

const imagens = [
  'fino-grao-img (4).jpg',
  'fino-grao-img (2).jpg',
  'fino-grao-img (1).jpg',
  'fino-grao-img (3).jpg',
  'fino-grao-img (4).jpg',
];

export default function Home() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % imagens.length);
    }, 5000);

    return () => clearInterval(intervalo); // limpa o intervalo 
  }, []);

  return (
    <div className="px-4 py-15 ">
      <h1 className="text-5xl font-bold text-center text-white drop-shadow-l mt-20">
        Bem-vindo à Cafeteria{" "}
        <span className="text-amber-500">
          <h1 className="text-4xl mt-2">Fino Grão</h1>
        </span>
      </h1>
      {/*texto e carrossel:*/}
         <div className="flex justify-center mt-20">
        <div className="relative w-full max-w-4xl h-[400px] overflow-hidden rounded-lg shadow-lg">
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 z-10">
            <p className="text-white text-lg text-center leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eos
              excepturi deserunt nihil repudiandae obcaecati sint voluptates non
              deleniti impedit aperiam esse ipsum, rem doloremque eum expedita
              dolore illum animi!
            </p>
          </div>

          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${indiceAtual * 100}%)` }}
          >
            {imagens.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0 object-cover h-full"
              />
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
}