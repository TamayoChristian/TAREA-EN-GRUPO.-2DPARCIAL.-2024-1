package com.grupo9.dev.restaurante.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.CategoriasModel;

@Repository
public interface CategoriasRepository extends CrudRepository<CategoriasModel, Integer>{
	

}
