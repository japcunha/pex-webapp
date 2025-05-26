import MenuSection from "../components/MenuSection.jsx";
import { useEffect, useState } from "react"
import api from "../utils/api.js";

export default function Menu() {   
  const [products, setProducts] = useState([])
  // eslint-disable-next-line no-constant-binary-expression
  


  useEffect(() =>{
    api.get("/products/menu")
    .then((response) =>{      
      setProducts(response.data)
    })
  }, [])
 
 console.log(products)
 const bebidas = products.filter((product) => product.categoryId == 1 )
 const salgados = products.filter((product) => product.categoryId == 2 )
 const sobremesas = products.filter((product) => product.categoryId == 3 )
 
 console.log(bebidas)
  return (  
    <div>      
      
    <div className="max-w-md mx-auto  m-25 shadow-lg rounded-xl bg-black/70 text-white p-5">
      <h1 className="text-2xl font-bold mb-6 text-center">MENU</h1>
      <MenuSection title="Bebidas" items={bebidas}  />
      <MenuSection title="Salgados" items={salgados} />
      <MenuSection title="Sobremesas" items={sobremesas} />
    </div>
     </div>
  );
}
