// src/mocks/mockProducts.js
export const mockProducts = [
  {
    id: 1,
    nome: "Café coado",
    preco: 5.0,
    descricao: "Café especial",
    categoria: "bebidas",
    subcategoria: "Quentes"
  },
  
  {
    id: 2,
    nome: "Coxinha",
    preco: 6.5,
    descricao: "Recheada com frango e catupiry",
    categoria: "salgados",
    subcategoria: "Fritos"
  },
  {
    id: 3,
    nome: "Bolo de Chocolate",
    preco: 7.0,
    descricao: "Fatia de bolo com cobertura",
    categoria: "sobremesas",
    subcategoria: "Doces"
  
  },
   {
    id: 4,
    nome: "Bolo de Chocolate",
    preco: 7.0,
    descricao: "Fatia de bolo com cobertura",
    categoria: "sobremesas",
    subcategoria: "Doces"
  
  },
];
export const getProduct = async () => {
  return [...mockProducts];
};

export const createProduct = async (newProduct) => {
  const id = Date.now(); 
  mockProducts.push({ ...newProduct, id });
  return { ...newProduct, id };
};

export const updateProduct = async (id, updatedData) => {
  const index = mockProducts.findIndex((p) => p.id === id);
  if (index !== -1) {
    mockProducts[index] = { ...updatedData };
  }
  return mockProducts[index];
};

export const deleteProduct = async (id) => {
 const index = mockProducts.findIndex((p) => p.id === id);
  if (index !== -1) {
    mockProducts.splice(index, 1); //modificar o array original!
  }
  return true;
};