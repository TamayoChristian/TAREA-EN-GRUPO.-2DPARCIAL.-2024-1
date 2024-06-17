import { useContext } from "react";
import { AdminContext } from "../contex/AdminContext";

function ModoAdministrador() {
    const { cliente, reserva } = useContext(AdminContext);

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
            </div>
        </>
    );
}

export default ModoAdministrador;