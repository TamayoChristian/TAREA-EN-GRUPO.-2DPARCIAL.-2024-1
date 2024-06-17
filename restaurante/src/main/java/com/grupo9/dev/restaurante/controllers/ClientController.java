package com.grupo9.dev.restaurante.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.ClientesModel;
import com.grupo9.dev.restaurante.services.ClienteService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/Clientes")
public class ClientController {
	@Autowired
	ClienteService clienteservice;
	
	@GetMapping()
	public ArrayList<ClientesModel> obtenerClientes(){
		return clienteservice.obtenerClientes();
	}
	
	@PostMapping
	public ClientesModel guardarCliente(@RequestBody ClientesModel Cliente) {
		return this.clienteservice.guardarCliente(Cliente);
	}
	
	@GetMapping(path="/{id}")
	public Optional<ClientesModel> obtenerID(@PathVariable("id") Integer id) {
		return this.clienteservice.obtenerID(id);
	}
	
	@GetMapping("/query")
	public ArrayList<ClientesModel> obtenerNombre(@RequestParam("nombre") String nombre){
		return this.clienteservice.obtenerNombre(nombre);
	}
	@DeleteMapping(path = "/{id}")
	public String eliminarCliente(@PathVariable("id") Integer id) {
		boolean ok = this.clienteservice.eliminarCliente(id);
		if(ok) {
			return "Se eliminó el cliente" + id;
		}else {
			return "No se pudo eliminar el usuario" + id; 
		}
	}
}
