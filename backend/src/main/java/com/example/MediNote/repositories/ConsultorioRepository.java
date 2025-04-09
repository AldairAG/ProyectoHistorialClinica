package com.example.MediNote.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.example.MediNote.entities.Consultorio;

public interface ConsultorioRepository extends CrudRepository<Consultorio, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario
    // Por ejemplo, para buscar consultorios por nombre o ubicación
    
    // Método para encontrar un consultorio por doctorId
    List<Consultorio> findByDoctor_IdUsuario(Long doctorId);

    @Modifying
    @Query("UPDATE Consultorio c SET c.activo = :estado WHERE c.id = :id")
    void updateEstadoById(@Param("id") Long id, @Param("estado") String activo);
}
