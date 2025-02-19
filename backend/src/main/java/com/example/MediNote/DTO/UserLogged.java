package com.example.MediNote.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserLogged {
    private String email;
    private String nombre;
    private String apellidoPaterno;
    private String apellidoMaterno;
    private String universidad;
    private String cedula;
    private String cedulaEspecialidad;
}
