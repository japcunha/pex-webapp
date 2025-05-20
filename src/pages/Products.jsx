import { Context } from "../context/UserContext";
import { useContext, useEffect, useState } from "react"
import Form from "../components/Form.jsx";
import api from "../utils/api.js";


function Products(){
    // const {authenticated} = useContext(Context)
    return(

    <div>
         {<div className="bg-white ml-50% mr-50% p-25">
                
            <p>Todos produtos cadastrados</p>   
              
        </div>}
    </div>
    )
}



export default Products