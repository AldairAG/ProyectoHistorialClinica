package com.example.MediNote.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.MediNote.entities.Rol;

public interface RolRepository extends JpaRepository<Rol ,Long> {
    Optional<Rol> findByNombre(String nombre);
}
