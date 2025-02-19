package com.example.MediNote.services.doctor;

import java.util.List;
import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.request.NuevoPacienteRequest;

public interface DoctorService {

    Paciente actualizarPaciente(Long idPaciente, Paciente pacienteActualizado);

    void eliminarPaciente(Long idPaciente);

    Paciente obtenerPacientePorId(Long idPaciente);

    List<Paciente> obtenerTodosLosPacientes();

    List<PacientesListDTO> obtenerTodosLosPacientesPorEmail(String email);

    Paciente registrarPaciente(NuevoPacienteRequest paciente);

    AntecedentesPatologicos actualizarAntecedentesPatologicos(Long id,AntecedentesPatologicos antecedentesPatologicos);
    
    AntecedentesNoPatologicos actualizarAntecedentesNoPatologicos(Long id,AntecedentesNoPatologicos antecedentesPatologicos);


}
