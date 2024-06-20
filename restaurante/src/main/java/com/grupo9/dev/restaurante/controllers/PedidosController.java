package com.grupo9.dev.restaurante.controllers;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.PedidosModel;
import com.grupo9.dev.restaurante.services.PedidosService;

@RestController
@RequestMapping("/Pedidos")
public class PedidosController {
	@Autowired
	PedidosService pedidosservice;
	
	@GetMapping()
	public ArrayList<PedidosModel> obtenerPedidos(){
		return pedidosservice.obtenerPedidos();
	}
	
	@PostMapping
	public PedidosModel generarPedidos(@RequestBody PedidosModel pedidos) {
		return this.pedidosservice.generarPedidos(pedidos);
	}
}
