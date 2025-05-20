import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


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
                alert("Usuário cadastrado com sucesso")
                console.log(response.data)
                return response.data
            })
      
        } catch (error) {
            console.log(error.response.data.message           
            )
        }

    }
     
    async function authUser(data) {
       setAuthenticated(true)
       
       localStorage.setItem('token', JSON.stringify(data.token))
       navigate('/')
       localStorage.setItem()
    }

    async function login(user) {
      
        try {
          const data = await api.post('/users/login', user).then((response) =>{
                return response.data
        })

            await authUser(data)
        } catch (error) {
           return error.response.data.message
           
        }
  
    }

    function logout(){             
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')      
    }

    return { authenticated, register, logout, login }
}