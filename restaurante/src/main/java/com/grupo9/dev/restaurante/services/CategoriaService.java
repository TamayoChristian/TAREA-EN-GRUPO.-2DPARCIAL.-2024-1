package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.CategoriasModel;
import com.grupo9.dev.restaurante.models.ClientesModel;
import com.grupo9.dev.restaurante.repositories.CategoriasRepository;

@Service
public class CategoriaService {
	@Autowired
	CategoriasRepository categoriarepository;
	
	public ArrayList<CategoriasModel> obtenerClientes(){
		return (ArrayList<CategoriasModel>) categoriarepository.findAll();
	}
	public CategoriasModel guardarCategoria(CategoriasModel categoria) {
		return categoriarepository.save(categoria);
	}
}
