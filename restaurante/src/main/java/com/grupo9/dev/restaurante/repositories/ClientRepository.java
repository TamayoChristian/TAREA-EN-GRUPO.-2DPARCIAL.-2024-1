package com.grupo9.dev.restaurante.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.ClientesModel;

@Repository
public interface ClientRepository extends CrudRepository<ClientesModel, Integer>{
	public abstract ArrayList<ClientesModel> findByNombre(String nombre);
}
