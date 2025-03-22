package com.example.MediNote.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MediNote.entities.notas_medicas.Receta;
import com.example.MediNote.services.Receta.RecetaService;

@RestController
@RequestMapping("/mdn/receta")
public class RecetaController {
    @Autowired
    private RecetaService service;

    // Obtener una NotaMedica por ID
    @GetMapping("/{id}")
    public ResponseEntity<Receta> getById(@PathVariable Long id) {
        try {
            Receta receta = service.getById(id);
            return ResponseEntity.ok(receta);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Obtener todas las Notas Médicas de un Doctor
    @GetMapping("/doctor/{idDoctor}")
    public ResponseEntity<List<Receta>> getByIdDoctor(@PathVariable Long idDoctor) {
        try {
            List<Receta> list = service.getByIdDoctor(idDoctor);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    // Obtener todas las Notas Médicas de un Paciente
    @GetMapping("/paciente/{idPaciente}")
    public ResponseEntity<List<Receta>> getByIdPaciente(@PathVariable Long idPaciente) {
        try {
            List<Receta> list = service.getByIdPaciente(idPaciente);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
