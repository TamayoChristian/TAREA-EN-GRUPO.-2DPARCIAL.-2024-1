import { useState } from "react";

function Reservas() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [canPersonas, setCanPersonas] = useState('');
    const [error, setError] = useState('');


//Función que guarada los datos del cliente en la base de datos
    const guardarClientes = async (clienteData) => {
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

    //Función que guarda los datos de la reserva
    const guardarReserva = async (reservaData) => {
        try {
            const response = await fetch('/Reservas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reservaData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Reserva generada', data);
                return data.id;
            } else {
                console.error('Error al generar la reserva');
                console.log(reservaData)
                return null;
            }
        } catch (error) {
            console.error('Error de red:', error);
            return null;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const clienteData = { nombre, correo, telefono };
        //Dar formato a fecha y hora.
        const fechaHora = new Date(`${fecha}T${hora}`);
        if (isNaN(fechaHora)) {
            setError('Fecha u hora inválida');
            return;
        }

        const reserva = { 
            fecha: fechaHora.toISOString().split('T')[0],
            hora: fechaHora.toTimeString().split(' ')[0],
            canPersonas  
        };

        if (nombre && correo && telefono) {
            console.log(clienteData, reserva)
            const clienteId = await guardarClientes(clienteData); //Guarda el cliente
            if (clienteId) {
                const cliente = {
                    id: clienteId,
                    nombre: clienteData.nombre,
                    correo: clienteData.correo,
                    telefono: clienteData.telefono
                }
                const reservaData = {
                    cliente,
                    fecha_reserva: reserva.fecha,
                    hora_reserva: reserva.hora,
                    numero_personas: reserva.canPersonas
                };
                console.log(reservaData)
                await guardarReserva(reservaData)
            }
        } else {
            setError('Rellenar todos los campos porfavor')
        }
    }

    return (
        <>
            <div className="container">
                <h1>Ingrese los datos para hacer su reserva</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}

                            onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="correo">Correo:</label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}

                            onChange={(e) => setCorreo(e.target.value)} />
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
                    <div>
                        <label htmlFor="fecha">fecha de la reserva:</label>
                        <input
                            type="Date"
                            id="fechaCita"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="hora">Hora de la reserva:</label>
                        <input
                            type="time"
                            id="horaReserva"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cantidad">Catidad de personas:</label>
                        <input
                            type="number"
                            id="cantidadPer"
                            value={canPersonas}
                            onChange={(e) => setCanPersonas(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Reservar</button>
                </form>
            </div>
        </>
    );
}

export default Reservas;