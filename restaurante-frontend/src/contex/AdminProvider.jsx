import React, { useEffect, useState } from 'react'
import { AdminContext } from './AdminContext';

export const AdminProvider = ({children}) => {
  
    const[cliente, setCliente] = useState([]);
    const[reserva, setReserva] = useState([]);

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

    useEffect(() => {
      fetchCliente()
      fetchReserva()
    }, []);
    
  
  
    return (
    <AdminContext.Provider value={{cliente, reserva}}>
        {children}
    </AdminContext.Provider>
  )
}
