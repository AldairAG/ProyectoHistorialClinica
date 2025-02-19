package com.example.MediNote.request;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.HospitalizacionesPrevias;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class NuevoPacienteRequest {
    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String nombre;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private String sexo;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    private Integer edad;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
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

    @NotNull(message = "El ID del doctor es obligatorio")
    private String emailDoctor;

    private List<AntecedentesFam> antecedentesFams = new ArrayList<>();
    private List<HospitalizacionesPrevias> hospitalizacionesPrevias = new ArrayList<>();
    private AntecedentesNoPatologicos antecedentesNoPatologicos;
    private AntecedentesPatologicos antecedentesPatologicos;
}
