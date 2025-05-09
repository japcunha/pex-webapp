import MenuSection from "../components/MenuSection.jsx";

export default function Menu() {
  const bebidas = [
    { id: 1, nome: "chá gelado", preco: 4.0 },
    { id: 2, nome: "café", preco: 5.0 },
    { id: 3, nome: "suco natural", preco: 10.0 },
    
  ];
  const salgados = [
    { id: 4, nome: "empada de frango", preco: 15.0 },
 { id: 5, nome: "coxinha", preco: 10.0 },
    { id: 6, nome: "tapioca", preco: 10.0 },
  ];

  const sobremesas = [
    { id: 7, nome: "torta de maçã", preco: 20.0 },
    { id: 8, nome: "bolo de chocolate", preco: 20.0 },
    { id: 9, nome: "pudim", preco: 10.0 },
  ];

  return (
    <div className="max-w-md mx-auto  p-4 mt-25 shadow-lg rounded-xl bg-black/70 text-white">
      <h1 className="text-2xl font-bold mb-6 text-center">MENU</h1>
      <MenuSection title="Bebidas" items={bebidas}  />
      <MenuSection title="Salgados" items={salgados} />
      <MenuSection title="Sobremesas" items={sobremesas} />
    </div>
  );
}
