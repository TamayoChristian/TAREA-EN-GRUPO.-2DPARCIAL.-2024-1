package com.grupo9.dev.restaurante.models;
import jakarta.persistence.*;

@Entity
@Table(name = "Cliente")
public class ClientesModel {
//: id, nombre, correo, telefon
	
	//Campos / Atributos 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Indica que el ID se autogenera
	@Column(unique = true, nullable = false) //Indica que el valor es unico y no puede ser null
	private int id;
	
	@Column(nullable = false)
	private String nombre;
	@Column(nullable = false)
	private String correo;
	@Column(nullable = true)
	private long telefono;
	
	public int getId() {
		return id;
	}
	
	//Getters and setters
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public long getTelefono() {
		return telefono;
	}
	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}
	

	
}
