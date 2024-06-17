package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.ClientesModel;
import com.grupo9.dev.restaurante.repositories.ClientRepository;

@Service
public class ClienteService {
	@Autowired
	ClientRepository clienterepository;
	
	public ArrayList<ClientesModel> obtenerClientes(){
		return (ArrayList<ClientesModel>) clienterepository.findAll();
	}
	
	public ClientesModel guardarCliente(ClientesModel cliente) {
		return clienterepository.save(cliente);
	}
	
	public Optional<ClientesModel> obtenerID(Integer id){
		return clienterepository.findById(id);
	}
	
	public ArrayList<ClientesModel> obtenerNombre(String nombre){
		return clienterepository.findByNombre(nombre);
	}
	
	public boolean eliminarCliente(Integer id) {
		try {
			clienterepository.deleteById(id);
			return true;
			
		} catch (Exception err) {
			return false;
		}
	}
}
