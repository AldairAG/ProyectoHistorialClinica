package com.example.MediNote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;

public interface AntecedentesNPRepository extends JpaRepository<AntecedentesNoPatologicos, Long>{
    
}
