/**
 * Controller for managing Consultorio entities.
 * Provides endpoints for CRUD operations and specific queries.
 * 
 * Base URL: /mdn/consultorio
 */
package com.example.MediNote.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.MediNote.entities.Consultorio;
import com.example.MediNote.services.consultorio.ConsultorioService;


@RestController
@RequestMapping("/mdn/consultorio")
public class ConsultorioController {

    @Autowired
    private ConsultorioService consultorioService;

    @GetMapping("/{id}")
    public ResponseEntity<Consultorio> getConsultorioById(@PathVariable Long id) {
        try {
            Consultorio consultorio = consultorioService.getConsultorioById(id);
            return consultorio != null ? ResponseEntity.ok(consultorio) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/medico/{medicoId}")
    public ResponseEntity<List<Consultorio>> getConsultoriosByMedicoId(@PathVariable Long medicoId) {
        try {
            List<Consultorio> consultorios = consultorioService.getConsultoriosByMedicoId(medicoId);
            return ResponseEntity.ok(consultorios);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/cita/{idCita}")
    public ResponseEntity<List<Consultorio>> getConsultoriosByCitaId(@PathVariable Long idCita) {
        try {
            // Este método aún no está implementado en el servicio
            throw new UnsupportedOperationException("Método 'getConsultoriosByCitaId' no implementado");
        } catch (UnsupportedOperationException e) {
            return ResponseEntity.status(501).body(null); // 501 Not Implemented
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/{idDoctor}")
    public ResponseEntity<Consultorio> saveConsultorio(@RequestBody Consultorio consultorio ,
            @PathVariable Long idDoctor) {
        try {
            Consultorio savedConsultorio = consultorioService.save(consultorio,idDoctor);
            return ResponseEntity.ok(savedConsultorio);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateConsultorio(@PathVariable Long id, @RequestBody Consultorio consultorio) {
        try {
            // Este método aún no está implementado en el servicio
            throw new UnsupportedOperationException("Método 'updateConsultorio' no implementado");
        } catch (UnsupportedOperationException e) {
            return ResponseEntity.status(501).build(); // 501 Not Implemented
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConsultorio(@PathVariable Long id) {
        try {
            consultorioService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
