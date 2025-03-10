package com.example.MediNote.services.doctor;

import java.util.List;

import com.example.MediNote.DTO.PacienteDTO;
import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.EnfermedadCronica;
import com.example.MediNote.entities.historia_clinica.HospitalizacionesPrevias;
import com.example.MediNote.request.NuevoPacienteRequest;

public interface DoctorService {

    int actualizarPaciente(Long idPaciente, PacienteDTO pacienteActualizado);

    void eliminarPaciente(Long idPaciente);

    Paciente obtenerPacientePorId(Long idPaciente);

    List<Paciente> obtenerTodosLosPacientes();

    List<PacientesListDTO> obtenerTodosLosPacientesPorEmail(String email);

    Paciente registrarPaciente(NuevoPacienteRequest paciente);

    AntecedentesPatologicos actualizarAntecedentesPatologicos(Long id,AntecedentesPatologicos antecedentesPatologicos);
    
    AntecedentesNoPatologicos actualizarAntecedentesNoPatologicos(Long id,AntecedentesNoPatologicos antecedentesPatologicos);

    AntecedentesFam addAntecedentesFamiliares(Long idPaciente,AntecedentesFam antecedente);

    void deleteAntecedentesFamiliares(Long idPaciente,Long idAntecedente);

    HospitalizacionesPrevias addHospitalizaciones(Long idPaciente,HospitalizacionesPrevias hospitalizacion);

    void deleteHospitalizaciones(Long idPaciente,Long idHospitalizacion);

    EnfermedadCronica addEnfermedadesCronicas(Long idPaciente,EnfermedadCronica enfermedad);

    void deleteEnfermedadesCronicas(Long idPaciente,Long idEnfermedad);
}
