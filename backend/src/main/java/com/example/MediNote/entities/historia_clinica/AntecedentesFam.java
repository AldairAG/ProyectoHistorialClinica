package com.example.MediNote.entities.historia_clinica;

import com.example.MediNote.entities.Paciente;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class AntecedentesFam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAntecedenteFam;
    private String familiar;
    private String antecedente;

    //Relación muchos a uno con Paciente
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_paciente", nullable = false)
    @JsonIgnore
    private Paciente paciente;
}
