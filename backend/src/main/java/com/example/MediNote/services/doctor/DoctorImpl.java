package com.example.MediNote.services.doctor;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.HospitalizacionesPrevias;
import com.example.MediNote.helpers.Helpers;
import com.example.MediNote.repositories.AntecedentesNPRepository;
import com.example.MediNote.repositories.AntecedentesPRepository;
import com.example.MediNote.repositories.PacienteRepository;
import com.example.MediNote.repositories.UserRepository;
import com.example.MediNote.request.NuevoPacienteRequest;

@Service
public class DoctorImpl implements DoctorService {

    @Autowired
    PacienteRepository pacienteRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AntecedentesNPRepository antecedentesNPRepository;

    @Autowired
    AntecedentesPRepository antecedentesPRepository;

    @Autowired
    Helpers helpers;

    @Override
    @Transactional
    public Paciente actualizarPaciente(Long idPaciente, Paciente pacienteActualizado) {
        // Buscar el paciente existente
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        // Campos a excluir en la copia de propiedades
        Set<String> excludeFields = Set.of("antecedentesPatologicos", "antecedentesNoPatologicos");

        // Copiar solo los campos no nulos del objeto fuente al objeto destino
        BeanUtils.copyProperties(pacienteActualizado, paciente,
                helpers.getNullPropertyNames(pacienteActualizado, excludeFields));

        return pacienteRepository.save(paciente);
    }

    @Override
    @Transactional
    public void eliminarPaciente(Long idPaciente) {
        pacienteRepository.deleteById(idPaciente);
    }

    @Override
    @Transactional(readOnly = true)
    public Paciente obtenerPacientePorId(Long idPaciente) {
        return pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));
    }

    @Override
    @Transactional(readOnly = true)
    public List<Paciente> obtenerTodosLosPacientes() {
        return pacienteRepository.findAll();
    }

    @Override
    @Transactional
    public Paciente registrarPaciente(NuevoPacienteRequest pacienteDTO) {

        Usuario doctor = userRepository.findByEmail(pacienteDTO.getEmailDoctor())
                .orElseThrow(() -> new RuntimeException("Doctor no encontrado"));

        // Crear el paciente
        Paciente paciente = Paciente.builder()
                .nombre(pacienteDTO.getNombre())
                .sexo(pacienteDTO.getSexo())
                .edad(pacienteDTO.getEdad())
                .fechaNacimiento(pacienteDTO.getFechaNacimiento())
                .lugarNacimiento(pacienteDTO.getLugarNacimiento())
                .estadoCivil(pacienteDTO.getEstadoCivil())
                .grupoSanguineo(pacienteDTO.getGrupoSanguineo())
                .domicilio(pacienteDTO.getDomicilio())
                .telefono(pacienteDTO.getTelefono())
                .escolaridad(pacienteDTO.getEscolaridad())
                .religion(pacienteDTO.getReligion())
                .ocupacion(pacienteDTO.getOcupacion())
                .doctor(doctor)
                .build();

        // Mapear antecedentes familiares
        if (pacienteDTO.getAntecedentesFams() != null) {
            paciente.setAntecedentesFams(pacienteDTO.getAntecedentesFams().stream()
                    .map(antecedente -> {
                        AntecedentesFam nuevoAntecedente = new AntecedentesFam();
                        nuevoAntecedente.setAntecedente(antecedente.getAntecedente());
                        nuevoAntecedente.setPaciente(paciente);
                        nuevoAntecedente.setFamiliar(antecedente.getFamiliar());
                        return nuevoAntecedente;
                    })
                    .collect(Collectors.toList()));
        }

        // Mapear hospitalizaciones previas
        if (pacienteDTO.getHospitalizacionesPrevias() != null) {
            paciente.setHospitalizacionesPrevias(pacienteDTO.getHospitalizacionesPrevias().stream()
                    .map(hospitalizacion -> {
                        HospitalizacionesPrevias hospitalizacionesPrevias = new HospitalizacionesPrevias();
                        hospitalizacionesPrevias.setDiagnostico(hospitalizacion.getDiagnostico());
                        hospitalizacionesPrevias.setFechaIngreso(hospitalizacion.getFechaIngreso());
                        hospitalizacionesPrevias.setFechaSalida(hospitalizacion.getFechaSalida());
                        hospitalizacionesPrevias.setMotivo(hospitalizacion.getMotivo());
                        hospitalizacionesPrevias.setInstitucion(hospitalizacion.getInstitucion());
                        hospitalizacionesPrevias.setTratamiendo(hospitalizacion.getTratamiendo());
                        hospitalizacionesPrevias.setPaciente(paciente);
                        return hospitalizacionesPrevias;
                    })
                    .collect(Collectors.toList()));
        }

        // Mapear antecedentes no patológicos
        if (pacienteDTO.getAntecedentesNoPatologicos() != null) {
            AntecedentesNoPatologicos antecedentesNoPatologicos = pacienteDTO.getAntecedentesNoPatologicos();
            antecedentesNoPatologicos.setPaciente(paciente);
            paciente.setAntecedentesNoPatologicos(antecedentesNoPatologicos);
        }

        // Mapear antecedentes patológicos
        if (pacienteDTO.getAntecedentesPatologicos() != null) {
            AntecedentesPatologicos antecedentesPatologicos = pacienteDTO.getAntecedentesPatologicos();
            antecedentesPatologicos.setPaciente(paciente);
            paciente.setAntecedentesPatologicos(antecedentesPatologicos);
        }

        // Crear el paciente
        return pacienteRepository.save(paciente);
    }

    @Override
    public List<PacientesListDTO> obtenerTodosLosPacientesPorEmail(String email) {
        return pacienteRepository.findPacientesByEmail(email);
    }

    @Override
    @Transactional
    public AntecedentesPatologicos actualizarAntecedentesPatologicos(Long idPaciente,
            AntecedentesPatologicos antecedentesActulizado) {

        AntecedentesPatologicos antecedente = antecedentesPRepository.findById(idPaciente)
            .orElseThrow(()->new RuntimeException("Registro no encontrado"));

        // Campos a excluir en la copia de propiedades
        Set<String> excludeFields = Set.of("idAntecedentePatologico");

        // Copiar solo los campos no nulos del objeto fuente al objeto destino
        BeanUtils.copyProperties(antecedentesActulizado, antecedente,
                helpers.getNullPropertyNames(antecedentesActulizado, excludeFields));

        return antecedentesPRepository.save(antecedente);
    }

    @Override
    @Transactional
    public AntecedentesNoPatologicos actualizarAntecedentesNoPatologicos(Long idPaciente,
            AntecedentesNoPatologicos antecedentesActulizado) {

        AntecedentesNoPatologicos antecedente = antecedentesNPRepository.findById(idPaciente)
        .orElseThrow(()->new RuntimeException("Registro no encontrado"));


        // Campos a excluir en la copia de propiedades
        Set<String> excludeFields = Set.of();

        // Copiar solo los campos no nulos del objeto fuente al objeto destino
        BeanUtils.copyProperties(antecedentesActulizado, antecedente,
                helpers.getNullPropertyNames(antecedentesActulizado, excludeFields));

        return antecedentesNPRepository.save(antecedente);
    }

}
