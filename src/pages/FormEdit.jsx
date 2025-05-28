import  { useState, useEffect } from "react";
import api from "../utils/api.js";
import { useParams } from "react-router-dom";

export default function Form() {  
  const [product, setProduct] = useState({})
  const token = localStorage.getItem('token')
  const {id} = useParams()

  function handleChange (e){
    setProduct({...product, [e.target.name]: e.target.value}
  )
  }

  useEffect(() =>{
        api.get(`/products/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response)=>{
           setProduct( response.data)
        })
    }, [token, id])
  
  async function handleSubmit (e) {
    e.preventDefault()
    
    await api.patch(`/products/${id}`, product, {
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`    
        }
    })     
   .then((response) =>{
    console.log(response.data)
     return response.data
   })
   .catch((error) =>{
    return error.message
   })
    
  }

  return (
    <div className="bg-white ml-50% mr-50% p-25">
        <form onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center font-bold mb-4">
        Editar Produto
      </h2>
      
      <label className="block mb-2">  Nome *</label>
      <input
        type="text"
        name="name"
        value={product.name || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      />

      <label className="block mb-2">Preço *</label>
      <input
        type="text"
        name="price"
        value={product.price || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        step="0.01"
        required
      />

      <label className="block mb-2">Descrição </label>
      <input
        type="text"
        name="description"
        value={product.description || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        step="0.01"        
      />

      <label className="block mb-2">Categoria *</label>
      <select
        name="categoryId"
        value={product.categoryId || ''}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-4"
        required
      >
        <option disabled > Selecione uma categoria</option>
        <option value="1">Bebidas</option>
        <option value="2">Salgados</option>
        <option value="3">Sobremesas</option>
      </select>

        <label className="block">Subcategoria *</label>
        <input
          type="text"
          name="subcategoria"
          value={product.subcategoria || ''}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <div className="flex justify-center gap-5">
          <button
            type="submit"
            className="bg-amber-500 text-white  mt-10 px-4 py-2 rounded hover:bg-amber-600 cursor-pointer"
          >           
          Editar produto
          </button>         
        </div>
      </form>
    </div>
    
   
  );
}