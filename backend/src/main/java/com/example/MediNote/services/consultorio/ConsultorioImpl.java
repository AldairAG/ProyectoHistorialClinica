package com.example.MediNote.services.consultorio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MediNote.entities.Consultorio;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.repositories.ConsultorioRepository;
import com.example.MediNote.repositories.UserRepository;


@Service
public class ConsultorioImpl implements ConsultorioService{
    @Autowired
    private UserRepository doctorRepository;

    @Autowired
    private ConsultorioRepository consultorioRepository;

    @Override
    public Consultorio getConsultorioById(Long id) {
        return consultorioRepository.findById(id).orElse(null);
    }

    @Override
    public List<Consultorio> getConsultoriosByMedicoId(Long medicoId) {
        return consultorioRepository.findByDoctor_IdUsuario(medicoId);
    }

    @Override
    public List<Consultorio> getConsultoriosByCitaId(Long idCita) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getConsultoriosByCitaId'");
    }

    @Override
    public Consultorio save(Consultorio consultorio, Long idMedico) {
        Usuario doctor = doctorRepository.findById(idMedico).orElse(null);

        consultorio.setDoctor(doctor);

        doctor.agregarConsultorio(consultorio);

        return doctorRepository.save(doctor).getConsultorios().get(0);
    }

    @Override
    public void updateConsultorio(Consultorio consultorio) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateConsultorio'");
    }

    @Override
    public void delete(Long id) {
        consultorioRepository.deleteById(id);
    }
    
}
