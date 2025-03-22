package com.example.MediNote.services.Receta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.entities.notas_medicas.Receta;
import com.example.MediNote.entities.notas_medicas.Tratamiento;
import com.example.MediNote.repositories.RecetaRepository;

@Service
public class RecetaImpl implements RecetaService{

    @Autowired
    private RecetaRepository repository;

    @Override
    @Transactional(readOnly = true)
    public Receta getById(Long id) {
        return repository.findById(id).orElseThrow(()-> new RuntimeException("Receta no encontrada"));    
    }

    @Override
    @Transactional(readOnly = true)
    public List<Receta> getByIdDoctor(Long id) {
        return repository.findByPaciente_idPaciente(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Receta> getByIdPaciente(Long id) {
        return repository.findByPaciente_idPaciente(id);
    }

    @Override
    @Transactional(readOnly = true)
    public void save(List<Tratamiento> tratamientos) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }
    
}
