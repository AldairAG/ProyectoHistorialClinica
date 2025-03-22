package com.example.MediNote.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.notas_medicas.NotaMedica;

public interface NotaMedicaRepository extends JpaRepository<NotaMedica,Long> {
    
    List<NotaMedica> findByDoctor_idUsuario(Long id);

    List<NotaMedica> findByPaciente_idPaciente(Long id);
}
