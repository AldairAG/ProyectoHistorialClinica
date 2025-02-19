package com.example.MediNote.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PacientesListDTO {
    private Long idPaciente;
    private String nombre;
    //private Date ultimaVisita;
    private Integer edad;


    
}
