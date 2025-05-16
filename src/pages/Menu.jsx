import MenuSection from "../components/MenuSection.jsx";
import React, { useState, useEffect } from "react";
import Form from "../pages/Form.jsx";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../mock/mockProducts.js";

export default function Menu({ isAdmin }) {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  //carregar produtos
  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await getProduct();
      setProducts(data);
    } catch (err) {
      setError("Erro ao carregar osdados");
    }finally {
    setLoading(false);
    }
  };

  //editar
  const handleProductSubmit = async (productData) => {
    try {
      if (productData.id) {
        await updateProduct(productData.id, productData);
      } else {
        await createProduct(productData);
      }
      await loadProducts();
      setEditProduct(null);
    } catch (err) {
      setError("Falha ao salvar produto");
      console.error(err);
    }
  };
  //deletaar
  const handleProductDelete = async (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
    setEditProduct(null);
  };

  // Filtra produtos por categoria
  const bebidas = products.filter((p) => p.categoria === "bebidas");
  const salgados = products.filter((p) => p.categoria === "salgados");
  const sobremesas = products.filter((p) => p.categoria === "sobremesas");

  return (
    <div className="">
      {isAdmin && (
        <div className="bg-white ml-50% mr-50% p-25">
          <Form
            onSubmit={handleProductSubmit}
            editProduct={editProduct}
            onDelete={handleProductDelete}
            onCancelEdit={() => setEditProduct(null)}
          />
        </div>
      )}

      <div className="max-w-4x1 mx-auto m-25 shadow-lg rounded-xl bg-black/70 text-white p-2">
        <h1 className="text-2xl font-bold mb-8 mt-5 text-center">MENU</h1>
        <MenuSection
          title="Bebidas"
        items={products.filter((p) => p.categoria === "bebidas")}
          onEdit={setEditProduct}
        />
        <MenuSection
          title="Salgados"
          items={salgados}
          onEdit={setEditProduct}
          onDelete={handleProductDelete}
        />
        <MenuSection
          title="Sobremesas"
          items={sobremesas}
          onEdit={setEditProduct}
          onDelete={handleProductDelete}
        />
      </div>
    </div>
  );
}
