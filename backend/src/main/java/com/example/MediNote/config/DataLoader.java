package com.example.MediNote.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.MediNote.constants.ROLES;
import com.example.MediNote.entities.Rol;
import com.example.MediNote.services.rol.RolService;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private RolService RolService;

    @Override
    public void run(String... args) throws Exception {

        // Crear roles si no existen
        if (RolService.findByNombre(ROLES.DOCTOR).isEmpty()) {
            RolService.save(Rol.builder().nombre(ROLES.DOCTOR).build());
        }
        if (RolService.findByNombre(ROLES.ADMIN).isEmpty()) {
            RolService.save(Rol.builder().nombre(ROLES.ADMIN).build());
        }
        if (RolService.findByNombre(ROLES.PACIENTE).isEmpty()) {
            RolService.save(Rol.builder().nombre(ROLES.PACIENTE).build());
        }
    }
}