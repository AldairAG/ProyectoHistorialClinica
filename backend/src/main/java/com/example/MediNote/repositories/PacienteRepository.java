package com.example.MediNote.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.DTO.PacienteDTO;
import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {

    @Query("SELECT new com.example.MediNote.DTO.PacientesListDTO(p.idPaciente,p.nombre, p.edad) FROM Paciente p JOIN p.doctor d WHERE d.email = :email")
    List<PacientesListDTO> findPacientesByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Paciente SET " +
            "nombre = CASE WHEN CAST(:#{#pacienteDTO.nombre} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.nombre} AS VARCHAR) ELSE nombre END, " +
            "apellido_paterno = CASE WHEN CAST(:#{#pacienteDTO.apellidoPaterno} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.apellidoPaterno} AS VARCHAR) ELSE apellido_paterno END, " +
            "apellido_materno = CASE WHEN CAST(:#{#pacienteDTO.apellidoPaterno} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.apellidoPaterno} AS VARCHAR) ELSE apellido_materno END, " +
            "sexo = CASE WHEN CAST(:#{#pacienteDTO.sexo} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.sexo} AS VARCHAR) ELSE sexo END, " +
            "edad = CASE WHEN CAST(:#{#pacienteDTO.edad} AS INTEGER) IS NOT NULL THEN CAST(:#{#pacienteDTO.edad} AS INTEGER) ELSE edad END, " +
            "fecha_nacimiento = CASE WHEN CAST(:#{#pacienteDTO.fechaNacimiento} AS DATE) IS NOT NULL THEN CAST(:#{#pacienteDTO.fechaNacimiento} AS DATE) ELSE fecha_nacimiento END, " +
            "lugar_nacimiento = CASE WHEN CAST(:#{#pacienteDTO.lugarNacimiento} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.lugarNacimiento} AS VARCHAR) ELSE lugar_nacimiento END, " +
            "estado_civil = CASE WHEN CAST(:#{#pacienteDTO.estadoCivil} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.estadoCivil} AS VARCHAR) ELSE estado_civil END, " +
            "domicilio = CASE WHEN CAST(:#{#pacienteDTO.domicilio} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.domicilio} AS VARCHAR) ELSE domicilio END, " +
            "telefono = CASE WHEN CAST(:#{#pacienteDTO.telefono} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.telefono} AS VARCHAR) ELSE telefono END, " +
            "ocupacion = CASE WHEN CAST(:#{#pacienteDTO.ocupacion} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.ocupacion} AS VARCHAR) ELSE ocupacion END, " +
            "religion = CASE WHEN CAST(:#{#pacienteDTO.religion} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.religion} AS VARCHAR) ELSE religion END, " +
            "escolaridad = CASE WHEN CAST(:#{#pacienteDTO.escolaridad} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.escolaridad} AS VARCHAR) ELSE escolaridad END, " +
            "grupo_sanguineo = CASE WHEN CAST(:#{#pacienteDTO.grupoSanguineo} AS VARCHAR) IS NOT NULL THEN CAST(:#{#pacienteDTO.grupoSanguineo} AS VARCHAR) ELSE grupo_sanguineo END " +
            "WHERE id_paciente = :id", nativeQuery = true)
    int actualizarPaciente(@Param("id") Long id, @Param("pacienteDTO") PacienteDTO pacienteDTO);

}
