package com.example.MediNote.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.MediNote.entities.citas.Horario;

public interface HorarioRepository extends CrudRepository<Horario, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario
    // Por ejemplo, para buscar horarios por médico o fecha
    
}
