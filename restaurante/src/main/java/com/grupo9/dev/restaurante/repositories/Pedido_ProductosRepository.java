package com.grupo9.dev.restaurante.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.Pedido_ProductosModel;

@Repository
public interface Pedido_ProductosRepository extends CrudRepository<Pedido_ProductosModel, Integer>{

}
