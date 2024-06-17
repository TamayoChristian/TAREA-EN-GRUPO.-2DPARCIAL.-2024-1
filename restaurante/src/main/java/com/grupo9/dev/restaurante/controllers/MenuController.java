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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.MenusModels;
import com.grupo9.dev.restaurante.services.ClienteService;
import com.grupo9.dev.restaurante.services.MenuServices;

@RestController
@RequestMapping("/Menu")
public class MenuController {
	@Autowired
	MenuServices menuservices;
	
	@GetMapping()
	public ArrayList<MenusModels> obtenerMenu(){
		return menuservices.obtenerMenu();
	}
	@PostMapping
	public MenusModels guardarMenu(@RequestBody MenusModels menu) {
		return this.menuservices.guardarMenus(menu);
	}
	@GetMapping(path="/{id}")
	public Optional<MenusModels> obtenerId(@PathVariable("id") Integer id){
		return this.menuservices.obtenerID(id);
	}
	@GetMapping("/query")
	public ArrayList<MenusModels> obtenerNombre(@RequestParam("nombre") String nombre){
		return this.menuservices.obtnenerNombre(nombre);
	}
	@DeleteMapping(path="/{id}")
	public String eliminarMenu(@PathVariable("id") Integer id) {
		boolean ok = this.menuservices.eliminarMenu(id);
		if(ok) {
			return "Se ha eliminado el menú " + id;
		}else {
			return "No se ha podido eliminar el menú " + id;
		}
	}
}
