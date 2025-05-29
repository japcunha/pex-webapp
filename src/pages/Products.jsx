import  { useState, useEffect } from "react";
import api from "../utils/api.js"
import styles from "./Products.module.css"
import { Link } from "react-router-dom"
import { FaSpinner } from 'react-icons/fa'
import Alert from "../components/Alert.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsoading] = useState(true)
  const token = localStorage.getItem('token')

  // Carrega os produtos ao montar a página
  
    useEffect(() =>{
      api.get("/products/menu")
      .then((response) =>{      
        setProducts(response.data)
       setTimeout(() =>{
         setIsoading(false)
       }, 600)
      })
    }, [])

 async function removeProduct(id){
        await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`
        }
      }).then((response) =>{
        const updateProducts = products.filter((product) => product.id !== id)
         Alert({
            title: "Produto removido com sucesso!",
            type: "success"
          })
        setProducts(updateProducts)        
        return response.data
      }).catch((err) =>{
         Alert({
            title: "Erro ao remover produto!",
            type: "error"
          })
        return err
      })
    }

  const bebidas = products.filter((product) => product.categoryId == 1 )
  const salgados = products.filter((product) => product.categoryId == 2 )
 const sobremesas = products.filter((product) => product.categoryId == 3 )
  
  return (
    <div className={styles.div_main}>
      <h1>Gerenciador de productos</h1>
    {isLoading ? (
         <div className="flex items-center justify-center h-screen bg-gray-100">
      <FaSpinner className="animate-spin text-orange-400 text-4xl mr-2" />
      <p className="text-gray-700 text-lg">Carregando produtos...</p>
    </div>
    ): (
      <>
        <div className={styles.div_product}>
        <h2>Bebidas</h2>

        {bebidas.length > 0 ? (
            <ul>   
            {bebidas.map((item) =>(
              <li key={item.id} className={styles.li_context}>
                <div className={styles.div_item}>
                    <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
                </div>
                <div className={styles.div_btn}>
                    <Link className={styles.a_edit} to={`/products/${item.id}`}>Editar</Link>
                <button className={styles.button_detalhes} onClick={() =>{removeProduct(item.id)}}>Excluir</button>
                </div>
              </li>
            ))}          
          </ul> 
        ) :(
          <p>Nenhuma bebida cadastrada</p>
        )
        }
     
      </div>

      <div className={styles.div_product}>
        <h2>Salgados</h2>
      
       {salgados.length > 0 ? (

         <ul>
        {salgados.map((item) =>(
          <li key={item.id} className={styles.li_context}>
            <div className={styles.div_item}>
                <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            </div>
            <div className={styles.div_btn}>
                <Link className={styles.a_edit} to={`/products/${item.id}`}>Editar</Link>
            <button className={styles.button_detalhes}  onClick={() =>{
              removeProduct(item.id)
            }}>Excluir</button>
            </div>
          </li>
        ))}          
      </ul> 
       ) :(
         <p>Nenhum salgado cadastrada</p>
       )}
      </div>


      <div className={styles.div_product}>
        <h2>Sobremesas</h2>

       {sobremesas.length > 0 ? (
      <ul>
        {sobremesas.map((item) =>(
          <li key={item.id} className={styles.li_context}>
            <div className={styles.div_item}>
                <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.price}</span>
            </div>
            <div className={styles.div_btn}>
                <Link className={styles.a_edit} to={`/products/${item.id}`}>Editar</Link>
            <button className={styles.button_detalhes}  onClick={() =>{
              removeProduct(item.id)
            }}>Excluir</button>
            </div>
          </li>
        ))}          
      </ul> 
       ) : (
        <p>Nenhuma sobremesa cadastrada</p>
       )

       }
      </div> 
      
      </>
    )
    
    }         
    </div>
  )
}