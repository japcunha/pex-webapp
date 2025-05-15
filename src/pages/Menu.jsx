import MenuSection from "../components/MenuSection.jsx";
import Form from "../components/Form.jsx";
import { Context } from "../context/UserContext";
import { useContext } from "react"

export default function Menu() {
   const {authenticated} = useContext(Context)
  const bebidas = [
    { id: 1, nome: "chá gelado", preco: 4.0, descricao: "feito com dksaodksadosadokdoadsadadasaddsadasd..."},
    { id: 2, nome: "café", preco: 5.0 },
    { id: 3, nome: "suco natural", preco: 10.0 },
    
  ];
  const salgados = [
    { id: 4, nome: "empada de frango", preco: 15.0 },
 { id: 5, nome: "coxinha", preco: 10.0 },
    { id: 6, nome: "tapioca", preco: 10.0 },
  ];

  const sobremesas = [
    { id: 7, nome: "torta de maçã", preco: 20.0},
    { id: 8, nome: "bolo de chocolate", preco: 20.0 },
    { id: 9, nome: "pudim", preco: 10.0 },
  ];

  return (
  
    <div>
      <div className="bg-white ml-50% mr-50% p-25">
        
        {authenticated && (
          <Form/>
        ) 
        }
      
      </div>

      
    <div className="max-w-md mx-auto  m-25 shadow-lg rounded-xl bg-black/70 text-white p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">MENU</h1>
      <MenuSection title="Bebidas" items={bebidas}  />
      <MenuSection title="Salgados" items={salgados} />
      <MenuSection title="Sobremesas" items={sobremesas} />
    </div>
     </div>
  );
}
