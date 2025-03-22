package com.example.MediNote.DTO;

import java.util.List;

import com.example.MediNote.entities.notas_medicas.RegistroNotaMedica;
import com.example.MediNote.entities.notas_medicas.Tratamiento;

import lombok.Getter;

@Getter
public class NuevaNotaMedicaDTO {
    private Long idDoctor;
    private Long idPaciente;
    private List<RegistroNotaMedica> registros;
    private List<Tratamiento> tratamientos;
}
