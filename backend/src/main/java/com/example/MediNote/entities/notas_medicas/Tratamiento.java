package com.example.MediNote.entities.notas_medicas;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Tratamiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTratamiento;

    // Relación muchos a uno: un paciente pertenece a un doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_receta", nullable = false)
    @JsonBackReference
    private Receta receta;

    private String medicamento;
    private String duracion;
    private String frecuencia;
    private String dosis;
    private String viaDeAdministracion;
    private String indicaciones;

}
