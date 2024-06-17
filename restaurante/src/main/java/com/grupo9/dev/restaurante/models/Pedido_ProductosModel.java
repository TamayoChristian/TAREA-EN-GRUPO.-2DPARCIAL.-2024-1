package com.grupo9.dev.restaurante.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Pedido_Productos")
public class Pedido_ProductosModel {
//pedido_id, menu_id, cantidad, precio_unitario
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Indica que el ID se autogenera
	@Column(unique = true, nullable = false) //Indica que el valor es unico y no puede ser null
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "pedido_id")
	private PedidosModel pedido;
	@ManyToOne
	@JoinColumn(name = "menu_id")
	private MenusModels menu;
	@Column(nullable = false)
	private int cantidad;
	@Column(nullable = false)
	private float precio_uniario;
	public PedidosModel getPedido() {
		return pedido;
	}
	public void setPedido(PedidosModel pedido) {
		this.pedido = pedido;
	}
	public MenusModels getMenu() {
		return menu;
	}
	public void setMenu(MenusModels menu) {
		this.menu = menu;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public float getPrecio_uniario() {
		return precio_uniario;
	}
	public void setPrecio_uniario(float precio_uniario) {
		this.precio_uniario = precio_uniario;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
}
