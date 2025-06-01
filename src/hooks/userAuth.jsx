import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'


export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false)
   
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`  
          setAuthenticated(true)
        }
    }, [])
    
    async function register(user) {
                     
        try {
            await api.post('/users/', user).then((response) =>{
                
            Alert({
                title: "Usuário cadastrado com sucesso!",
                type: "success"
            })
             return response.data
            })
      
        } catch (error) {
             Alert({
            title: "Erro ao cadastrar usuário!",
            type: "error"
        })
            error.response.data.message           
            
        }

    }
     
    async function authUser(data) {
       setAuthenticated(true)
       
       localStorage.setItem('token', JSON.stringify(data.token))
       navigate('/')
       
    }

    async function login(user) {
      
        try {
          const data = await api.post('/users/login', user).then((response) =>{
            return response.data
        })
        
        Alert({
            title: "Login realizado com sucesso!",
            type: "success"
        })

            await authUser(data)
        } catch (error) {
             Alert({
            title: "Erro ao realizar o login!",
            type: "error"
        })
           return error           
        }
  
    }

    function logout(){             
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
         Alert({
            title: "Logout realizado com sucesso!",
            type: "success"
        })
        navigate('/')      
    }

    return { authenticated, register, logout, login }
}