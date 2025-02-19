package com.example.MediNote.services.rol;

import java.util.Optional;

import com.example.MediNote.entities.Rol;

public interface RolService {
    void save(Rol rol);
    
    Optional<Rol> findByNombre(String nombre);
}
