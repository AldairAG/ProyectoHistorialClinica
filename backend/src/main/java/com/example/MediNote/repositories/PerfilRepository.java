package com.example.MediNote.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.Perfil;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {
    // Métodos personalizados si es necesario
    boolean existsByCedula(String cedula);
}
