package com.example.MediNote.services.consultorio;

import java.util.List;

import com.example.MediNote.entities.Consultorio;

public interface ConsultorioService {
    Consultorio getConsultorioById(Long id);

    List<Consultorio> getConsultoriosByMedicoId(Long medicoId);

    List<Consultorio> getConsultoriosByCitaId(Long idCita);

    Consultorio save(Consultorio consultorio, Long idMedico);

    void updateConsultorio(Consultorio consultorio);

    void delete(Long id);
}
