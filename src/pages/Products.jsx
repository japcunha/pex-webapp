import  { useState, useEffect } from "react";
import Form from "../components/Form.jsx";
import MenuSection from "../components/MenuSection.jsx"
import api from "../utils/api.js"
import styles from "./Products.module.css"
import { Link } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token')

  // Carrega os produtos ao montar a página
  
    useEffect(() =>{
      api.get("/products/menu")
      .then((response) =>{      
        setProducts(response.data)
      })
    }, [])

 async function removeProduct(id){
        await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`
        }
      }).then((response) =>{
        const updateProducts = products.filter((product) => product.id !== id)
        setProducts(updateProducts)
        console.log(response.data)
        return response.data
      }).catch((err) =>{
        return err
      })
    }

  const bebidas = products.filter((product) => product.categoryId == 1 )
  const salgados = products.filter((product) => product.categoryId == 2 )
 const sobremesas = products.filter((product) => product.categoryId == 3 )
  
  return (
    <div className={styles.div_main}>
     <h1>Gerenciador de productos</h1>
    
    <div className={styles.div_product}>
        <h2>Bebidas</h2>

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
            <button className={styles.button_detalhes} onClick={() =>{
              removeProduct(item.id)
            }}>Excluir</button>
            </div>
          </li>
        ))}          
      </ul> 
    </div>

    <div className={styles.div_product}>
        <h2>Salgados</h2>

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
    </div>


    <div className={styles.div_product}>
        <h2>Sobremesas</h2>

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
    </div>



    
    </div>
  );
}