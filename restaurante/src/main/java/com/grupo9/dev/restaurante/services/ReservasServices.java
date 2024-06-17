package com.grupo9.dev.restaurante.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grupo9.dev.restaurante.models.ReservasModel;
import com.grupo9.dev.restaurante.repositories.ReservasRepository;

@Service
public class ReservasServices {
	@Autowired
	ReservasRepository reservasrepository;
	
	public ArrayList<ReservasModel> ObtenerReservas() {
		return (ArrayList<ReservasModel>) reservasrepository.findAll();	
		
	}
	
	public ReservasModel generarReservas(ReservasModel reserva) {
		return reservasrepository.save(reserva);
	}
	
	public Optional<ReservasModel> obtenerReservaId(Integer id) {
		return reservasrepository.findById(id);
	}
	
	public ReservasModel modificarReserva(int id, ReservasModel detallesReserva) {
        ReservasModel reservaExistente = reservasrepository.findById(id).orElseThrow(() 
        		-> new RuntimeException("Reserva no encontrada"));

        reservaExistente.setCliente(detallesReserva.getCliente());
        reservaExistente.setFecha_reserva(detallesReserva.getFecha_reserva());
        reservaExistente.setHora_reserva(detallesReserva.getHora_reserva());
        reservaExistente.setNumero_personas(detallesReserva.getNumero_personas());

        return reservasrepository.save(reservaExistente);
    }
}
