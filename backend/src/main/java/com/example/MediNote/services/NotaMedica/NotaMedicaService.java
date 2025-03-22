package com.example.MediNote.services.NotaMedica;

import java.util.List;

import com.example.MediNote.DTO.NuevaNotaMedicaDTO;
import com.example.MediNote.entities.notas_medicas.NotaMedica;

public interface NotaMedicaService {

    NotaMedica getById(Long id);

    List<NotaMedica> getByIdDoctor(Long id);

    List<NotaMedica> getByIdPaciente(Long id);

    NotaMedica save(NuevaNotaMedicaDTO dto);


    
}
