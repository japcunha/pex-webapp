import React, { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import MenuSection from "../components/MenuSection.jsx";
import Login from "./Login.jsx";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../mock/mockProducts.js";


const adminEmails = ["joane@admin.com"];


const fields = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "preco", label: "Preço", type: "number", required: true },
  { name: "descricao", label: "Descrição", type: "text" },
  {
    name: "categoria",
    label: "Categoria",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Selecione" },
      { value: "bebidas", label: "Bebidas" },
      { value: "salgados", label: "Salgados" },
      { value: "sobremesas", label: "Sobremesas" },
    ],
  },
  { name: "subcategoria", label: "Subcategoria", type: "text", required: true },
];


export default function Products() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const isAdmin = adminEmails.includes(userEmail);

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProduct();
    setProducts(data);
  };

  const handleAddOrUpdateProduct = async (newProduct) => {
    if (newProduct.id) {
      await updateProduct(newProduct.id, newProduct); 
    } else {
      await createProduct(newProduct); // chama mock 
    }
    await loadProducts(); 
    setEditProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await deleteProduct(id);
      await loadProducts();
      setEditProduct(null);
    }
  };

  const handleEditProduct =(product) => {
    setEditProduct(product);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditProduct(null);
  };

  const categorias = ["bebidas", "salgados", "sobremesas"];

  return (
    <>
       {!userEmail ? ( 
         <Login onLoginSuccess={handleLoginSuccess} />
       ) : (
      
      <div className="bg-white max-w-4xl mx-auto p-4">
        <div className="m-20">
          <h1 className="text-4xl text-center font-bold my-8 text-amber-700 mt-40 ">
            Gerenciador de Cardápio
          </h1>
        </div>

        {categorias.map((categoria) => {
          const items = products.filter((p) => p.categoria === categoria);
          return items.length > 0 ? (
            <MenuSection
              key={categoria}
              title={categoria}
              items={items}
              onEdit={handleEditProduct}
            />
          ) : null;
        })}

        <div className="mt-10 border-t pt-10">
          <Form
            onSubmit={handleAddOrUpdateProduct}
            editProduct={editProduct}
            onDelete={handleDeleteProduct}
            onCancelEdit={handleCancelEdit}
            isAdmin={isAdmin}
            fields={fields}
          />
        </div>
      </div>
       )}
    </>
  );
}
