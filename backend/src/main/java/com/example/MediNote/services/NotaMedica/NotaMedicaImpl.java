package com.example.MediNote.services.NotaMedica;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.DTO.NuevaNotaMedicaDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.entities.notas_medicas.NotaMedica;
import com.example.MediNote.entities.notas_medicas.Receta;
import com.example.MediNote.entities.notas_medicas.RegistroNotaMedica;
import com.example.MediNote.entities.notas_medicas.Tratamiento;
import com.example.MediNote.repositories.NotaMedicaRepository;
import com.example.MediNote.repositories.PacienteRepository;
import com.example.MediNote.repositories.RecetaRepository;
import com.example.MediNote.repositories.UserRepository;

@Service
public class NotaMedicaImpl implements NotaMedicaService {
    @Autowired
    private NotaMedicaRepository repository;
    @Autowired
    private PacienteRepository pacienteRepository;
    @Autowired
    private UserRepository usuarioRepository;
    @Autowired
    private RecetaRepository recetaRepository;

    @Override
    @Transactional(readOnly = true)
    public NotaMedica getById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Nota medica no encontrada"));
    }

    @Override
    @Transactional(readOnly = true)
    public List<NotaMedica> getByIdDoctor(Long id) {
        return repository.findByDoctor_idUsuario(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<NotaMedica> getByIdPaciente(Long id) {
        return repository.findByPaciente_idPaciente(id);
    }

    @Override
    @Transactional
    public NotaMedica save(NuevaNotaMedicaDTO dto) {

        // Buscar al paciente y al doctor
        Paciente paciente = pacienteRepository.findById(dto.getIdPaciente())
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        Usuario doctor = usuarioRepository.findById(dto.getIdDoctor())
                .orElseThrow(() -> new RuntimeException("Doctor no encontrado"));

        // Crear la NotaMedica sin registros aún
        NotaMedica notaMedica = NotaMedica.builder()
                .paciente(paciente)
                .doctor(doctor)
                .registroNotaMedicas(new ArrayList<>()) // Inicializa lista vacía
                .build();

        // Asociar los registros a la NotaMedica
        if (dto.getRegistros() != null) {
            for (RegistroNotaMedica registro : dto.getRegistros()) {
                registro.setNotaMedica(notaMedica);
                notaMedica.getRegistroNotaMedicas().add(registro);
            }
        }
        // Guardar la NotaMedica (esto guarda los registros por CascadeType.ALL)
        notaMedica = repository.save(notaMedica);
        
        System.out.println(notaMedica.getIdNotaMedica());

        // Crear Receta y asociar Tratamientos si hay tratamientos en el DTO
        if (dto.getTratamientos() != null && !dto.getTratamientos().isEmpty()) {
            Receta receta = new Receta();
            receta.setNotaMedica(notaMedica);
            receta.setDoctor(doctor);
            receta.setPaciente(paciente);
            receta.setTratamientos(new ArrayList<>());

            for (Tratamiento tratamiento : dto.getTratamientos()) {
                tratamiento.setReceta(receta);
                receta.getTratamientos().add(tratamiento);
            }

            recetaRepository.save(receta);
            notaMedica.setReceta(receta);
        }

        return notaMedica;

    }

}
