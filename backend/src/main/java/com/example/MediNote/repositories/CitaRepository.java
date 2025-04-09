package com.example.MediNote.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.entities.citas.Cita;

import java.util.Date;
import java.util.List;

public interface CitaRepository extends CrudRepository<Cita, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario
    // Por ejemplo, para buscar citas por fecha o paciente

    List<Cita> findByDoctor_IdUsuario(Long doctor_IdUsuario);

    List<Cita> findByConsultorio_IdConsultorio(Long consultorio_IdConsultorio);

    List<Cita> findByPaciente_IdPaciente(Long paciente_IdUsuario);

    Cita findByTelefonoAndVerificadoTrueAndEstado(String telefono, String estado);

    List<Cita> findByFecha(Date fecha);

    @Modifying
    @Transactional
    @Query("UPDATE Cita c SET c.estado = :estado WHERE c.id = :id")
    void updateEstadoById(Long id, String estado);
}
