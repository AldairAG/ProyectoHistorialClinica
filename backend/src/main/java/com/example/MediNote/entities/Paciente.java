package com.example.MediNote.entities;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.HospitalizacionesPrevias;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Paciente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPaciente;

    //@NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String nombre;
    //@NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String sexo;
    //@NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private Integer edad;
    //@NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;
    private String lugarNacimiento;
    private String estadoCivil;
    private String domicilio;
    private String telefono;
    private String ocupacion;
    private String religion;
    private String escolaridad;
    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String grupoSanguineo;

    // Relación muchos a uno: un paciente pertenece a un doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_doctor", nullable = false)
    @JsonIgnore
    private Usuario doctor;

    // historial clinico
    @OneToMany(mappedBy = "paciente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<AntecedentesFam> antecedentesFams = new ArrayList<>();

    @OneToMany(mappedBy = "paciente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<HospitalizacionesPrevias> hospitalizacionesPrevias = new ArrayList<>();

    @Builder.Default
    @OneToOne(mappedBy = "paciente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private AntecedentesNoPatologicos antecedentesNoPatologicos = new AntecedentesNoPatologicos();
    
    @Builder.Default
    @OneToOne(mappedBy = "paciente", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private AntecedentesPatologicos antecedentesPatologicos = new AntecedentesPatologicos();
    
}