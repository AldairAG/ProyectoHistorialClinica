package com.example.MediNote.services.cita;

import java.util.Date;
import java.util.List;

import com.example.MediNote.entities.citas.Cita;

public interface CitaService {

    Cita getCitaById(Long id);

    List<Cita> getCitasByPacienteId(Long pacienteId);

    List<Cita> getCitasByMedicoId(Long medicoId);

    List<Cita> getCitasByConsultorioId(Long consultorioId);

    List<Cita> getCitasByFecha(Date fecha);

    Cita save(Cita cita, Long idConsultorio, Long idPaciente, Long idDoctor);

    void updateVerificacion(Cita cita);

    void delete(Long id);
}
