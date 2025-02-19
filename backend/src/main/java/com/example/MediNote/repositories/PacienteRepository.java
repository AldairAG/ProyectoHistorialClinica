package com.example.MediNote.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    @Query("SELECT new com.example.MediNote.DTO.PacientesListDTO(p.idPaciente,p.nombre, p.edad) FROM Paciente p JOIN p.doctor d WHERE d.email = :email")
    List<PacientesListDTO> findPacientesByEmail(@Param("email") String email);
}
