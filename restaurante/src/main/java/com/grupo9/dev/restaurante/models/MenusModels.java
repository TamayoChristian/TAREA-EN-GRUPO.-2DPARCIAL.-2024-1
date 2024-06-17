package com.grupo9.dev.restaurante.models;

import jakarta.persistence.*;

@Entity
@Table(name="Menus")
public class MenusModels {
//: id, nombre, descripcion, precio, categoria_id
	//Campos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@Column(nullable = false)
	private String nombre;
	@Column(nullable = true)
	private String description;
	@Column(nullable = false)
	private float precio;
	
	@ManyToOne
	@JoinColumn(name="Categoria_id")
	private CategoriasModel categoria;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public CategoriasModel getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriasModel categoria) {
		this.categoria = categoria;
	}
	
	
}
