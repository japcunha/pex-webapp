import MenuSection from "../components/MenuSection.jsx";
import { useEffect, useState } from "react";
import api from "../utils/api.js";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products/menu").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);
  const bebidas = products.filter((product) => product.categoryId == 1);
  const salgados = products.filter((product) => product.categoryId == 2);
  const sobremesas = products.filter((product) => product.categoryId == 3);

  console.log(bebidas);
  return (
    <div className="flex justify-center px-4 mt-10 py-10">
      <div className="w-full max-w-md sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-black/70 text-white rounded-xl shadow-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-4xl  font-bold mb-6 p-5 text-center">
          MENU
        </h1>
        <div className="flex flex-col gap-y-6 ">
          <MenuSection title="Bebidas" items={bebidas} />
          <MenuSection title="Salgados" items={salgados} />
          <MenuSection title="Sobremesas" items={sobremesas} />
        </div>
      </div>
    </div>
  );
}
