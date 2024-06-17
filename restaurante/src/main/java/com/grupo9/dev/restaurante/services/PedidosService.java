package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.PedidosModel;
import com.grupo9.dev.restaurante.repositories.PedidosRepository;

@Service
public class PedidosService {
	 @Autowired
	 PedidosRepository pedidosrepository;
	 
	 public ArrayList<PedidosModel> obtenerPedidos(){
		 return (ArrayList<PedidosModel>)pedidosrepository.findAll();
	 }
	 
	 public PedidosModel generarPedidos(PedidosModel pedidos) {
		 return pedidosrepository.save(pedidos);
	 }
}
