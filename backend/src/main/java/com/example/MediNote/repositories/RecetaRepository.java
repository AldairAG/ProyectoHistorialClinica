package com.example.MediNote.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.notas_medicas.Receta;

public interface RecetaRepository extends JpaRepository<Receta, Long> {

    List<Receta> findByDoctor_idUsuario(Long id);

    List<Receta> findByPaciente_idPaciente(Long id);

}
