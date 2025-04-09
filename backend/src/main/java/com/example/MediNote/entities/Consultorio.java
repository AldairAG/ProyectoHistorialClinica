package com.example.MediNote.entities;

import java.util.List;

import com.example.MediNote.entities.citas.Cita;
import com.example.MediNote.entities.citas.Horario;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Consultorio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idConsultorio;

    private String nombreConsultorio;
    private String direccionConsultorio;
    private String telefonoConsultorio;
    private Boolean activo;

    @OneToMany(mappedBy = "consultorio")
    private List<Horario> horarioAtencion;

    @ManyToOne
    private Usuario doctor;

    @OneToMany(mappedBy = "consultorio")
    private List<Cita> citas;
}
