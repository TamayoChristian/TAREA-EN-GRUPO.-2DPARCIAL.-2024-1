package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.Pedido_ProductosModel;
//import com.grupo9.dev.restaurante.models.PedidosModel;
import com.grupo9.dev.restaurante.repositories.Pedido_ProductosRepository;

@Service
public class Pedido_ProductosService {
	@Autowired
	Pedido_ProductosRepository pedido_productorepository;
	
	public ArrayList<Pedido_ProductosModel> obtenerPedidos(){
		return(ArrayList<Pedido_ProductosModel>) pedido_productorepository.findAll();
	}
	
	public Pedido_ProductosModel guardarPedido_Porducto(Pedido_ProductosModel ped_pro) {
		return pedido_productorepository.save(ped_pro);
	}
}