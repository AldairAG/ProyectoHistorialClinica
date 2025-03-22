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
public class RegistroNotaMedica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRegistroNotaMedica;

    private String nombre;
    private String descripcion;
    private Boolean presencia;

    // Relación muchos a uno: esta entidad es uno
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_nota_medica", nullable = false)
    @JsonBackReference
    private NotaMedica notaMedica;
}
