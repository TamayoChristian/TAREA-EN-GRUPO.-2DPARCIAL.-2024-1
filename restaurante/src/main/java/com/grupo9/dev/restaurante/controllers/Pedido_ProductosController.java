package com.grupo9.dev.restaurante.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.Pedido_ProductosModel;
import com.grupo9.dev.restaurante.services.Pedido_ProductosService;

@RestController
@RequestMapping("/Pedido_Producto")
public class Pedido_ProductosController {
	@Autowired
	Pedido_ProductosService ped_proservice;
	
	@GetMapping()
	public ArrayList<Pedido_ProductosModel> obtenerPedidos(){
		return ped_proservice.obtenerPedidos();
	}
	
	@PostMapping
	public Pedido_ProductosModel guardarPedido_Porducto(@RequestBody Pedido_ProductosModel ped_prod) {
		return this.ped_proservice.guardarPedido_Porducto(ped_prod);
	}
}
