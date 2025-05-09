// src/services/fakeApi.js
export async function getProducts() {
  return Promise.resolve([
    {
      id: 1,
      name: "Café Expresso",
      price: 6.0,
      description: "Café curto e encorpado.",
      categoria: "Bebida",
    },
    {
      id: 2,
      name: "Coxinha",
      price: 10.0,
      description: "Frango desfiado e massa empanada",
      categoria: "Salgado",
    },
    {
      id: 3,
      name: "Brigadeiro",
      price: 3.5,
      description: "feito com cacau 50% chocolate",
      categoria: "Sobremesa",
    },
  ]);
}
