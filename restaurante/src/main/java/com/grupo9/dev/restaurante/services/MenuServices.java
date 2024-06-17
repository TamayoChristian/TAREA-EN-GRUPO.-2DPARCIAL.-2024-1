package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.MenusModels;
import com.grupo9.dev.restaurante.repositories.MenusRepository;

@Service
public class MenuServices {
	@Autowired
	MenusRepository menusrepository;
	
	public ArrayList<MenusModels> obtenerMenu(){
		return(ArrayList<MenusModels>) menusrepository.findAll();
	}
	
	public MenusModels guardarMenus(MenusModels menu) {
		return menusrepository.save(menu);
	}
	
	public Optional<MenusModels> obtenerID(Integer id){
		return menusrepository.findById(id);
	}
	public ArrayList<MenusModels> obtnenerNombre(String nombre) {
		return menusrepository.findByNombre(nombre);
	}
	public boolean eliminarMenu(Integer id) {
		try {
			menusrepository.deleteById(id);
			return true;
		} catch (Exception err) {
			return false;
		}
	}
}
