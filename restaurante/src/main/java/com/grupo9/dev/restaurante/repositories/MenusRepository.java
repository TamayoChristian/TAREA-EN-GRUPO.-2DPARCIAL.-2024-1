package com.grupo9.dev.restaurante.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.MenusModels;

@Repository
public interface MenusRepository extends CrudRepository<MenusModels, Integer> {
	public abstract ArrayList<MenusModels> findByNombre(String nombre);
}
