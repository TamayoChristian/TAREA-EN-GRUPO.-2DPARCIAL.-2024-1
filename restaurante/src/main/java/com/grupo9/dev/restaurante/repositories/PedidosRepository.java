package com.grupo9.dev.restaurante.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo9.dev.restaurante.models.PedidosModel;

@Repository
public interface PedidosRepository extends CrudRepository<PedidosModel, Integer>{

}
