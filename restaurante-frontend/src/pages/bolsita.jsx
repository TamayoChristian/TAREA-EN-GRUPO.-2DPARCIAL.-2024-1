import { useContext, useState } from "react";
import { BolsitaContext } from "../contex/BolsitaContext";

function Bolsita() {
/////
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [estado, setEstado] = useState('');
  const [error, setError] = useState('');


const { listado, agregarPedido, quitarPedido, aumentarCantidad, disminuirCantidad } =
    useContext(BolsitaContext)


const calcularTotal = () => {
    return listado.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)
}

const guardarClientes = async (clienteData) => 
  {
    try {
      // Enviar los datos a la API
      const response = await fetch('/Clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clienteData),
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log('Cliente guardado correctamente', data);
        return data.id;
      } else {
        console.error('Error al guardar el cliente');
        return null;
      }
    } catch (error) {
      console.error('Error de red:', error);
      return null;
    }
  };

  const guardarPedido = async (pedidoData) => {
    try {
      const response = await fetch('/Pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedidoData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Pedido guardado correctamente', data);
        return data.id;
      } else {
        console.error('Error al guardar el pedido');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }

const guardarPedido_Producto = async (PedProdData) => {
  try {
    const response = await fetch('/Pedido_Producto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PedProdData),
    });
    if(response.ok){
      console.log('Almacenado');
    } else {
      console.error('Error al almacenar');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Nombre:', nombre);
  console.log('Correo:', correo);
  console.log('Teléfono:', telefono);
  
  const clienteData = {
    nombre,
    correo,
    telefono,
  };

  if (nombre && correo && telefono) {
    const clienteId = await guardarClientes(clienteData);
    console.log(clienteId)
    if (clienteId) {

      const cliente = {
        id:clienteId,
        nombre: clienteData.nombre,
        correo: clienteData.correo,
        telefono: clienteData.telefono
      }
      const pedidoData = {
       cliente,
        estado: 'Pendiente',
        fecha_pedido: new Date().toISOString()
      };
      const Pedido = await guardarPedido(pedidoData);
      console.log(pedidoData);
     if(Pedido) {
      for(const item of listado){
        const PedProdData = {
          pedido: {id: Pedido},
          menu: {id: item.id},
          cantidad: item.cantidad,
          precio_uniario: item.precio
        };
        console.log("SPedProd", PedProdData)
        await guardarPedido_Producto(PedProdData)
      }
    }
    } else {
      setError('Error al guardar el cliente. No se puede generar el pedido.');
    }
  } else {
    setError('Rellenar los campos del formulario para poder ordenar');
  }          
  };

return (
    <div>
      <div>
      <h2>Formulario de Cliente</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <button type="submit">Ordenar</button>
    </form>
    {error && <p style={{color:'red'}}>{error}</p>}
      </div>


        <table className="table">
            <thead>
               <tr>
                   <th scope="col">#</th>
                   <th scope="col">NOMBRE</th>
                   <th scope="col">DESCRIPCION</th>
                   <th scope="col">PRECIO</th>
                   <th scope="col">Cantidad</th>
                   <th scope="col">Eliminar</th>
               </tr>
           </thead>
           <tbody>
               {
                   listado.map((item) => (
                       <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.nombre}</td>
                           <td>{item.description}</td>
                           <td>{item.precio}</td>
                           <td>
                               <button 
                                   className="btn btn-ouline-primary"
                                   onClick={() => disminuirCantidad(item.id)}
                                   >-</button>
                               <button 
                                   className="btn btn-primary"
                                   >{item.cantidad}</button>
                               <button 
                                   className="btn btn-ouline-primary"
                                   onClick={() => aumentarCantidad(item.id)}>+</button>
                           </td>
                           <td><button onClick={()=> quitarPedido(item.id)}>Eliminar</button></td>
                       </tr>
                   ))
               }
               <th><b>TOTAL: </b></th>
               <td></td>
               <td></td>
               <td>${calcularTotal()}</td>
           </tbody>
       </table>
       <div>
           <button onClick={handleSubmit}>Generar pedido</button>
       </div>
   </div>
);
}

export default Bolsita;