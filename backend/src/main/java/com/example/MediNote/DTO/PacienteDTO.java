package com.example.MediNote.DTO;

import java.sql.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PacienteDTO {
    private String nombre; 
    private String apellidoPaterno; 
    private String apellidoMaterno; 
    private String sexo;
    private Integer edad;
    private Date fechaNacimiento;
    private String lugarNacimiento; 
    private String estadoCivil;
    private String domicilio; 
    private Integer telefono;
    private String ocupacion;
    private String religion;
    private String escolaridad;
    private String grupoSanguineo;
}
