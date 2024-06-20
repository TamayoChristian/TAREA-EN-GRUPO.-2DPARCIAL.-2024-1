import React, { useEffect, useState } from 'react'
import { AdminContext } from './AdminContext';

export const AdminProvider = ({children}) => {
  
    const[cliente, setCliente] = useState([]);
    const[reserva, setReserva] = useState([]);
    const[menu, setMenu] = useState([]);
    const[categoria, setCategoria] = useState([]);
    const[pedido, setPedido] = useState([]);
    const[pedpro, setPedpro] = useState([]);

    const fetchCliente = async() => {
        const response = await fetch('/Clientes')
        const data = await response.json()
        console.log(data)
        setCliente(data)
    }

    const fetchReserva = async() => {
        const response = await fetch('/Reservas')
        const data = await response.json()
        console.log(data)
        setReserva(data)
    }
    
    const fetchMenu = async() => {
        const response = await fetch('/Menu')
        const data = await response.json()
        console.log(data)
        setMenu(data)
    }

    const fetchCategoria = async() => {
        const response = await fetch('/Categoria')
        const data = await response.json()
        console.log(data)
        setCategoria(data)
    }

    const fetchPedido = async() => {
        const response = await fetch('/Pedidos')
        const data = await response.json()
        console.log(data)
        setPedido(data)
    }

    const fetchPedPro = async() => {
        const response = await fetch('/Pedido_Producto')
        const data = await response.json()
        console.log(data)
        setPedpro(data)
    }

    useEffect(() => {
      fetchCliente()
      fetchReserva()
      fetchMenu()
      fetchCategoria()
      fetchPedido()
      fetchPedPro()
    }, []);
    
  
  
    return (
    <AdminContext.Provider value={{cliente, reserva, menu, categoria, pedido, pedpro}}>
        {children}
    </AdminContext.Provider>
  )
}
