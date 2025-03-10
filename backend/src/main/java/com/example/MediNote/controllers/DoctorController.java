package com.example.MediNote.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MediNote.DTO.PacienteDTO;
import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.EnfermedadCronica;
import com.example.MediNote.entities.historia_clinica.HospitalizacionesPrevias;
import com.example.MediNote.request.NuevoPacienteRequest;
import com.example.MediNote.services.doctor.DoctorService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
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
            @RequestBody PacienteDTO pacienteActualizado) {
        try {
            int filasAfectadas = service.actualizarPaciente(idPaciente, pacienteActualizado);
            return ResponseEntity.ok().body(filasAfectadas);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    ///ENDOPINT DE ANTECEDENTES
    @PatchMapping("/actualizarANP/{id}")
    public ResponseEntity<?> actualizarAntecedentesNP(@PathVariable Long id,
            @RequestBody AntecedentesNoPatologicos antecedenteActualizado) {
        try {
            AntecedentesNoPatologicos antecedentesNoPatologicos = service
                    .actualizarAntecedentesNoPatologicos(id, antecedenteActualizado);
            return ResponseEntity.ok().body(antecedentesNoPatologicos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PatchMapping("/actualizarAP/{id}")
    public ResponseEntity<?> actualizarAntecedentesP(@PathVariable Long id,
            @RequestBody AntecedentesPatologicos antecedenteActualizado) {
        try {
            System.out.println("hp;a");
            AntecedentesPatologicos antecedentesNoPatologicos = service.actualizarAntecedentesPatologicos(id,
                    antecedenteActualizado);
            return ResponseEntity.ok().body(antecedentesNoPatologicos);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/addAH/{idPaciente}")
    public ResponseEntity<AntecedentesFam> agregarAntecedente(@PathVariable Long idPaciente,
            @RequestBody AntecedentesFam antecedente) {
        try {
            AntecedentesFam antecedenteNuevo = service.addAntecedentesFamiliares(idPaciente, antecedente);
            return ResponseEntity.status(HttpStatus.CREATED).body(antecedenteNuevo);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @DeleteMapping("/deleteHP/{idPaciente}/{idAntecedente}")
    public ResponseEntity<?> eliminarAntecedente(@PathVariable Long idPaciente,
            @PathVariable Long idAntecedente) {
        try {
            service.deleteAntecedentesFamiliares(idPaciente, idAntecedente);
            return ResponseEntity.notFound().build();

        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/addHP/{idPaciente}")
    public ResponseEntity<HospitalizacionesPrevias> agregarHospitalizacion(@PathVariable Long idPaciente,
            @RequestBody HospitalizacionesPrevias hospitalizacion) {
        try {
            HospitalizacionesPrevias newHospitalizacion = service.addHospitalizaciones(idPaciente, hospitalizacion);
            return ResponseEntity.ok(newHospitalizacion);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/deleteHP/{idPaciente}/{idHospitalizacion}")
    public ResponseEntity<?> eliminarHospitalizacion(@PathVariable Long idPaciente,
            @PathVariable Long idHospitalizacion) {
        try {
            service.deleteHospitalizaciones(idPaciente, idHospitalizacion);
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/addEC/{idPaciente}")
    public ResponseEntity<EnfermedadCronica> agregarEnfermedadCronica(@PathVariable Long idPaciente,
            @RequestBody EnfermedadCronica enfermedad) {
        try {
            EnfermedadCronica newEnfermedad = service.addEnfermedadesCronicas(idPaciente, enfermedad);
            return ResponseEntity.ok(newEnfermedad);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/deleteEC/{idPaciente}/{idEnfermedad}")
    public ResponseEntity<?> eliminarEnfermedadCronica(@PathVariable Long idPaciente,
            @PathVariable Long idEnfermedad) {
        try {
            service.deleteEnfermedadesCronicas(idPaciente, idEnfermedad);
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
