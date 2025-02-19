package com.example.MediNote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;

public interface AntecedentesPRepository extends JpaRepository<AntecedentesPatologicos, Long> {
    
}
