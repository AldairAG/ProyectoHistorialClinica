package com.example.MediNote.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.request.NuevoPacienteRequest;
import com.example.MediNote.services.doctor.DoctorService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/mdn/doctor")
public class DoctorController {
    @Autowired
    DoctorService service;

    @PostMapping("/registrarPaciente")
    public ResponseEntity<?> registarPaciente(@RequestBody NuevoPacienteRequest request) {
        try {
            Paciente paciente = service.registrarPaciente(request);
            return ResponseEntity.ok().body(paciente);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAll() {
        try {
            List<Paciente> pacientes = service.obtenerTodosLosPacientes();
            return ResponseEntity.ok().body(pacientes);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/all/{email}")
    public ResponseEntity<?> getAllByEmail(@PathVariable String email) {
        try {
            List<PacientesListDTO> pacientes = service.obtenerTodosLosPacientesPorEmail(email);
            if (pacientes.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron pacientes");
            }

            return ResponseEntity.ok().body(pacientes);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/getPacienteById/{idPaciente}")
    public ResponseEntity<?> getPacienteById(@PathVariable Long idPaciente) {
        try {
            Paciente paciente = service.obtenerPacientePorId(idPaciente);
            return ResponseEntity.ok().body(paciente);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/actualizarPaciente/{idPaciente}")
    public ResponseEntity<?> actualizarPaciente(@PathVariable Long idPaciente,
            @RequestBody Paciente pacienteActualizado) {
        try {
            Paciente paciente = service.actualizarPaciente(idPaciente, pacienteActualizado);
            return ResponseEntity.ok().body(paciente);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/actualizarANP/{idPaciente}")
    public ResponseEntity<?> actualizarAntecedentesNP(@PathVariable Long idPaciente,
            @RequestBody AntecedentesNoPatologicos antecedenteActualizado) {
        try {
            AntecedentesNoPatologicos antecedentesNoPatologicos = service
                    .actualizarAntecedentesNoPatologicos(idPaciente, antecedenteActualizado);
            return ResponseEntity.ok().body(antecedentesNoPatologicos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/actualizarAP/{idPaciente}")
    public ResponseEntity<?> actualizarAntecedentesP(@PathVariable Long idPaciente,@RequestBody AntecedentesPatologicos antecedenteActualizado) {
        try {
            AntecedentesPatologicos antecedentesNoPatologicos = service.actualizarAntecedentesPatologicos(idPaciente, antecedenteActualizado);
            return ResponseEntity.ok().body(antecedentesNoPatologicos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
