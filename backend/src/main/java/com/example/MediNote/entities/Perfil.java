package com.example.MediNote.entities;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor 
@AllArgsConstructor
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPerfil;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String nombre;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String apellidoPaterno;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String apellidoMaterno;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String universidad;

    @Column(unique = true, nullable = false)
    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    @Pattern(regexp = "\\d{8}", message = ERROR_MESSAGES.CEDULA_INVALIDA)
    private String cedula;

    //@Column(unique = true, nullable = true)
    //@NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    //@Pattern(regexp = "\\d{8}", message = ERROR_MESSAGES.CEDULA_INVALIDA)
    //private String cedulaEspecialidad;

    @OneToOne
    @JoinColumn(name = "id_usuario")
    @JsonBackReference
    private Usuario usuario;
}
