package com.example.MediNote.services.cita;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MediNote.entities.citas.Cita;
import com.example.MediNote.repositories.CitaRepository;
import com.example.MediNote.repositories.ConsultorioRepository;
import com.example.MediNote.repositories.PacienteRepository;
import com.example.MediNote.repositories.UserRepository;

@Service
public class CitaImpl implements CitaService {

    @Autowired
    private ConsultorioRepository consultorioRepository;
    @Autowired
    private PacienteRepository pacienteRepository;
    @Autowired
    private UserRepository doctorRepository;
    @Autowired
    private CitaRepository citaRepository;

    @Override
    public Cita getCitaById(Long id) {
        return citaRepository.findById(id).orElse(null);
    }

    @Override
    public List<Cita> getCitasByPacienteId(Long pacienteId) {
        return citaRepository.findByPaciente_IdPaciente(pacienteId);
    }

    @Override
    public List<Cita> getCitasByMedicoId(Long medicoId) {
        return citaRepository.findByDoctor_IdUsuario(medicoId);
    }

    @Override
    public List<Cita> getCitasByConsultorioId(Long consultorioId) {
        return citaRepository.findByConsultorio_IdConsultorio(consultorioId);
    }

    @Override
    public List<Cita> getCitasByFecha(Date fecha) {
        return citaRepository.findByFecha(fecha);
    }

    @Override
    public Cita save(Cita cita, Long idConsultorio, Long idPaciente, Long idDoctor) {

        cita.setConsultorio(consultorioRepository.findById(idConsultorio)
                .orElseThrow(() -> new IllegalArgumentException("Consultorio not found with id: " + idConsultorio)));

        if (idPaciente != null) {
            cita.setPaciente(pacienteRepository.findById(idPaciente)
                    .orElseThrow(() -> new IllegalArgumentException("Paciente not found with id: " + idPaciente)));
        }

        cita.setDoctor(doctorRepository.findById(idDoctor)
                .orElseThrow(() -> new IllegalArgumentException("Doctor not found with id: " + idDoctor)));

        return citaRepository.save(cita);
    }

    @Override
    public void updateVerificacion(Cita cita) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateVerificacion'");
    }

    @Override
    public void delete(Long id) {
        citaRepository.deleteById(id);
    }

}
