import { useContext } from "react";
import { AdminContext } from "../contex/AdminContext";

function ModoAdministrador() {
    const { cliente, reserva, menu, categoria, pedido, pedpro } = useContext(AdminContext);

    return (
        <>
            <div className="container">
                <h1>Tabla Cliente</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cliente.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.correo}</td>
                                    <td>{item.telefono}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h1>Tabla Reserva</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id Cliente</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">N° Invitados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reserva.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.cliente.id}</td>
                                    <td>{item.fecha_reserva}</td>
                                    <td>{item.hora_reserva}</td>
                                    <td>{item.numero_personas}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h1>Tabla Menu</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Categoria ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            menu.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.description}</td>
                                    <td>{item.precio}</td>
                                    <td>{item.categoria.id}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h1>Tabla Categoria</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            categoria.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h1>Tabla Pedidos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha del pedido</th>
                            <th scope="col">ID del cliente</th>
                            <th scope="col">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            pedido.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.fecha_pedido}</td>
                                    <td>{item.cliente.id}</td>
                                    <td>{item.estado}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h1>Tabla pedidos_ productos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id del pedido</th>
                            <th scope="col">Id del menú</th>
                            <th scope="col">cantidad</th>
                            <th scope="col">Precio Unitario</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            pedpro.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.pedido.id}</td>
                                    <td>{item.menu.id}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.precio_uniario}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div>
        </>
    );
}

export default ModoAdministrador;