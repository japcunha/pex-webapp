import MenuSection from "../components/MenuSection.jsx";
import Form from "../components/Form.jsx";
import React, { useState, useEffect } from "react";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/fakeApi.jsx";

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
      const response = await getProduct();
      setProducts(response);
    } catch (err) {
      setError("Falha ao carregar produtos");
      console.error(err);
    } finally {
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
    try {
      await deleteProduct(id);
      await loadProducts();
      setEditProduct(null);
    } catch (err) {
      setError("Falha ao deletar produto");
      console.error(err);
    }
  };

  // Filtra produtos por categoria
  const bebidas = products.filter((p) => p.categoria === "bebidas");
  const salgados = products.filter((p) => p.categoria === "salgados");
  const sobremesas = products.filter((p) => p.categoria === "sobremesas");

  if (loading) return <div>Carregando...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      {isAdmin && (
        <div className="bg-white ml-50% mr-50% p-25">
          <Form
            onSubmit={handleProductSubmit}
            editProduct={editProduct}
            onDelete={handleProductDelete}
          />
        </div>
      )}

      <div className="max-w-md mx-auto m-25 shadow-lg rounded-xl bg-black/70 text-white p-2">
        <h1 className="text-2xl font-bold mb-8 mt-5 text-center">MENU</h1>
        <MenuSection title="Bebidas" items={bebidas} onEdit={setEditProduct} />
        <MenuSection
          title="Salgados"
          items={salgados}
          onEdit={setEditProduct}
        />
        <MenuSection
          title="Sobremesas"
          items={sobremesas}
          onEdit={setEditProduct}
        />
      </div>
    </div>
  );
}
