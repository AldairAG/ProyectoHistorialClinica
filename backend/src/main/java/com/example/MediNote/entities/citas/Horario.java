package com.example.MediNote.entities.citas;

import com.example.MediNote.entities.Consultorio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;


@Entity
@Setter
@Getter
public class Horario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCita;
    private String horaInicio;
    private String horaFin;
    private String dia;

    @ManyToOne
    private Consultorio consultorio;

}
