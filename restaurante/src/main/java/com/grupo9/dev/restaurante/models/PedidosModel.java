package com.grupo9.dev.restaurante.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Pedidos")
public class PedidosModel {
	//: id, cliente_id, fecha_pedido, estado
	//Atibutos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="cliente_id")
	private ClientesModel cliente;
	@Column(nullable = false)
	private Date fecha_pedido;
	@Column(nullable = true)
	private String estado;
	
	//Getters and setters
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
	public Date getFecha_pedido() {
		return fecha_pedido;
	}
	public void setFecha_pedido(Date fecha_pedido) {
		this.fecha_pedido = fecha_pedido;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
}
