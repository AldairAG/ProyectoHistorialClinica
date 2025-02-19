package com.example.MediNote.entities;

import java.util.Set;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.constants.ROLES;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor // Asegúrate de incluir esto
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRol;

    @Pattern(regexp = ROLES.DOCTOR+"|"+ROLES.ADMIN+"|"+ROLES.PACIENTE, message = ERROR_MESSAGES.ROL_INVALIDO)
    @Column(unique = true, nullable = false)
    private String nombre; // e.g., "DOCTOR", "ADMIN", "PACIENTE"

    @ManyToMany(mappedBy = "roles",fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Usuario> usuarios;
}
