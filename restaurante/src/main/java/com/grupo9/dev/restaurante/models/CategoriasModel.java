package com.grupo9.dev.restaurante.models;

import jakarta.persistence.*;

@Entity
@Table(name="Categorias")
public class CategoriasModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@Column(nullable = true)
	private String nombre;
}
