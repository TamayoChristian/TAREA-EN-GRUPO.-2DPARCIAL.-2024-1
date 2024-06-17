package com.grupo9.dev.restaurante.models;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.*;

@Entity
@Table(name = "Reservas")
public class ReservasModel {
//: id, cliente_id, fecha_reserva, hora_reserva, numero_personas
	//Campos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="Cliente_id")
	private ClientesModel cliente;
	@Column(nullable = true)
	private Date fecha_reserva;
	@Column(nullable = true)
	private Time hora_reserva;
	@Column(nullable = false)
	private int numero_personas;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public ClientesModel getCliente() {
		return cliente;
	}
	public void setCliente(ClientesModel cliente) {
		this.cliente = cliente;
	}
	public Date getFecha_reserva() {
		return fecha_reserva;
	}
	public void setFecha_reserva(Date fecha_reserva) {
		this.fecha_reserva = fecha_reserva;
	}
	public Time getHora_reserva() {
		return hora_reserva;
	}
	public void setHora_reserva(Time hora_reserva) {
		this.hora_reserva = hora_reserva;
	}
	public int getNumero_personas() {
		return numero_personas;
	}
	public void setNumero_personas(int numero_personas) {
		this.numero_personas = numero_personas;
	}

}
