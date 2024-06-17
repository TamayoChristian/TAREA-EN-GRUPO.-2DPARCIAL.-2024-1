import React, { useContext, useState } from 'react';
import { Cards } from '../components/cards';
import { MenuContext } from '../contex/MenuContext';
import { BolsitaContext } from '../contex/BolsitaContext';

function Pedidos() {

const { listado, agregarPedido, quitarPedido, aumentarCantidad, disminuirCantidad } =
useContext(BolsitaContext)

const [nombre, setNombre] = useState('');
const [correo, setCorreo] = useState('');
const [telefono, setTelefono] = useState('');
const [error, setError] = useState('');

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
    console.log('Cliente guardado correctamente');
    
  } else {
    console.error('Error al guardar el cliente');
  }
} catch (error) {
  console.error('Error de red:', error);
}
};

const { menus } = useContext(MenuContext);

const handleAgregar = (menu) => {
if(nombre && correo && telefono){
agregarPedido(menu)
setError('');
} else {
setError('Rellenar los campos del formulario para poder ordenar')
}
}
const handleQuitar = (id) => {
quitarPedido(id)
};

return (
<>
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
  <div>
    <hr />
    {menus.map(menu => (
      <Cards key={menu.id}
        nombre={menu.nombre}
        descripcion={menu.description}
        precio={menu.precio}
        handleAgregar={() => handleAgregar(menu)}
        handleQuitar={() => handleQuitar(menu.id)}
      >
      </Cards>
    ))}
  </div>
</>
);
}

export default Pedidos;
