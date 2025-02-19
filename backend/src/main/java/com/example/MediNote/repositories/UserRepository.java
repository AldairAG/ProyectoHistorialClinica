package com.example.MediNote.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.MediNote.entities.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long>{
    Optional<Usuario> findByEmail(String email);

    @Query("SELECT u.password FROM Usuario u WHERE u.email = :email")
    Optional<String> findPasswordByEmail(@Param("email") String email);
}
