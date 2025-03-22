package com.example.MediNote.services.Receta;

import java.util.List;

import com.example.MediNote.entities.notas_medicas.Receta;
import com.example.MediNote.entities.notas_medicas.Tratamiento;

public interface RecetaService {

    Receta getById(Long id);

    List<Receta> getByIdDoctor(Long id);

    List<Receta> getByIdPaciente(Long id);

    void save(List<Tratamiento> tratamientos);
}
