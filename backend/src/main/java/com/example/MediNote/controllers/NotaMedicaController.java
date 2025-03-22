package com.example.MediNote.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MediNote.DTO.NuevaNotaMedicaDTO;
import com.example.MediNote.entities.notas_medicas.NotaMedica;
import com.example.MediNote.services.NotaMedica.NotaMedicaService;

@RestController
@RequestMapping("/mdn/notaMedica")
public class NotaMedicaController {

    @Autowired
    private NotaMedicaService service;

    // Obtener una NotaMedica por ID
    @GetMapping("/{id}")
    public ResponseEntity<NotaMedica> getById(@PathVariable Long id) {
        try {
            NotaMedica notaMedica = service.getById(id);
            return ResponseEntity.ok(notaMedica);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Obtener todas las Notas Médicas de un Doctor
    @GetMapping("/doctor/{idDoctor}")
    public ResponseEntity<List<NotaMedica>> getByIdDoctor(@PathVariable Long idDoctor) {
        try {
            List<NotaMedica> list = service.getByIdDoctor(idDoctor);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Obtener todas las Notas Médicas de un Paciente
    @GetMapping("/paciente/{idPaciente}")
    public ResponseEntity<List<NotaMedica>> getByIdPaciente(@PathVariable Long idPaciente) {
        try {
            List<NotaMedica> list = service.getByIdPaciente(idPaciente);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Guardar una nueva NotaMedica
    @PostMapping("/save")
    public ResponseEntity<NotaMedica> save(@RequestBody NuevaNotaMedicaDTO dto) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(dto));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
