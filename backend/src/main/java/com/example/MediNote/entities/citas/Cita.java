package com.example.MediNote.entities.citas;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.Consultorio;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Setter
@Getter
@Data
public class Cita {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCita;

    private Date fecha;
    private String hora;
    private String motivoCita;
    private String estado;
    private String nombrePaciente;
    private String telefono;
    private Boolean verificado;
    private String notasAdicionales;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    @JsonBackReference("usuario-citas") // Relación inversa con Usuario
    private Usuario doctor;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "consultorio_id", nullable = false)
    private Consultorio consultorio;

}
