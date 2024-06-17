package com.grupo9.dev.restaurante.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo9.dev.restaurante.models.ReservasModel;
import com.grupo9.dev.restaurante.services.ReservasServices;

@RestController
@RequestMapping("/Reservas")
public class ReservasController {
	@Autowired
	ReservasServices reservasservices;
	
	@GetMapping()
	public ArrayList<ReservasModel> ObtenerReservas(){
		return reservasservices.ObtenerReservas();
	}
	
	@PostMapping
	public ReservasModel generarReservas(@RequestBody ReservasModel reserva) {
		return this.reservasservices.generarReservas(reserva);
	}
	
	@PutMapping("/{id}")
    public ReservasModel modificarReservas(@PathVariable int id, @RequestBody ReservasModel detallesReserva) {
        return this.reservasservices.modificarReserva(id, detallesReserva);
    }
}
