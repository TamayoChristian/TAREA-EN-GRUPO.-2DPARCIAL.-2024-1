package com.grupo9.dev.restaurante.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.ReservasModel;

@Repository
public interface ReservasRepository extends CrudRepository<ReservasModel, Integer>{
	
}
