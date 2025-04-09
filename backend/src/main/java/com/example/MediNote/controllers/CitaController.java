package com.example.MediNote.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.MediNote.entities.citas.Cita;
import com.example.MediNote.services.cita.CitaService;

@RestController
@RequestMapping("/mdn/citas")
public class CitaController {

    @Autowired
    private CitaService citaService;

    @GetMapping("/{id}")
    public ResponseEntity<Cita> getCitaById(@PathVariable Long id) {
        try {
            Cita cita = citaService.getCitaById(id);
            return cita != null ? ResponseEntity.ok(cita) : ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/paciente/{pacienteId}")
    public ResponseEntity<List<Cita>> getCitasByPacienteId(@PathVariable Long pacienteId) {
        try {
            List<Cita> citas = citaService.getCitasByPacienteId(pacienteId);
            return ResponseEntity.ok(citas);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/medico/{medicoId}")
    public ResponseEntity<List<Cita>> getCitasByMedicoId(@PathVariable Long medicoId) {
        try {
            List<Cita> citas = citaService.getCitasByMedicoId(medicoId);
            return ResponseEntity.ok(citas);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/consultorio/{consultorioId}")
    public ResponseEntity<List<Cita>> getCitasByConsultorioId(@PathVariable Long consultorioId) {
        try {
            List<Cita> citas = citaService.getCitasByConsultorioId(consultorioId);
            return ResponseEntity.ok(citas);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/fecha/{fecha}")
    public ResponseEntity<List<Cita>> getCitasByFecha(
            @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date fecha) {
        try {
            List<Cita> citas = citaService.getCitasByFecha(fecha);
            return ResponseEntity.ok(citas);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/{idConsultorio}/{idPaciente}/{idDoctor}")
    public ResponseEntity<Cita> saveCita(@RequestBody Cita cita,
                                          @PathVariable Long idConsultorio,
                                          @PathVariable Long idPaciente,
                                          @PathVariable Long idDoctor) {
        try {
            Cita savedCita = citaService.save(cita, idConsultorio, idPaciente, idDoctor);
            return ResponseEntity.ok(savedCita);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateVerificacion(@PathVariable Long id, @RequestBody Cita cita) {
        try {
            // Este método aún no está implementado en el servicio
            throw new UnsupportedOperationException("Método 'updateVerificacion' no implementado");
        } catch (UnsupportedOperationException e) {
            return ResponseEntity.status(501).build(); // 501 Not Implemented
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCita(@PathVariable Long id) {
        try {
            citaService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<Void> updateEstado(@PathVariable Long id, @RequestBody String nuevoEstado) {
        try {
            //citaService.updateEstado(id, nuevoEstado);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
