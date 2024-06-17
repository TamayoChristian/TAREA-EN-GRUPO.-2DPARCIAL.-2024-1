package com.grupo9.dev.restaurante.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.CategoriasModel;
import com.grupo9.dev.restaurante.services.CategoriaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/Categoria")
public class CategoriaController {
	@Autowired
	CategoriaService categoriaservice;
	
	@GetMapping()
	public ArrayList<CategoriasModel> ObtenerCategorias(){
		return categoriaservice.obtenerClientes();
	}
	@PostMapping
	public CategoriasModel guardarCategoria(@RequestBody CategoriasModel Categoria) {
		return this.categoriaservice.guardarCategoria(Categoria);
	}
}
