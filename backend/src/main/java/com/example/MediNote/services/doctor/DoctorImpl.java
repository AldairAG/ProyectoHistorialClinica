package com.example.MediNote.services.doctor;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.DTO.PacienteDTO;
import com.example.MediNote.DTO.PacientesListDTO;
import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.entities.historia_clinica.AntecedentesFam;
import com.example.MediNote.entities.historia_clinica.AntecedentesNoPatologicos;
import com.example.MediNote.entities.historia_clinica.AntecedentesPatologicos;
import com.example.MediNote.entities.historia_clinica.EnfermedadCronica;
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
    public int actualizarPaciente(Long idPaciente, PacienteDTO pacienteActualizado) {
        // Buscar el paciente existente
        pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        return pacienteRepository.actualizarPaciente(idPaciente, pacienteActualizado);
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
                        hospitalizacionesPrevias.setDuracion(hospitalizacion.getDuracion());
                        hospitalizacionesPrevias.setMotivo(hospitalizacion.getMotivo());
                        hospitalizacionesPrevias.setInstitucion(hospitalizacion.getInstitucion());
                        hospitalizacionesPrevias.setTratamiendo(hospitalizacion.getTratamiendo());
                        hospitalizacionesPrevias.setPaciente(paciente);
                        return hospitalizacionesPrevias;
                    })
                    .collect(Collectors.toList()));
        }

        // Mapear antecedentes no patológicos

        AntecedentesNoPatologicos antecedentesNoPatologicos = new AntecedentesNoPatologicos();
        antecedentesNoPatologicos.setPaciente(paciente);
        paciente.setAntecedentesNoPatologicos(antecedentesNoPatologicos);

        // Mapear antecedentes patológicos

        AntecedentesPatologicos antecedentesPatologicos = new AntecedentesPatologicos();
        antecedentesPatologicos.setPaciente(paciente);
        paciente.setAntecedentesPatologicos(antecedentesPatologicos);

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
                .orElseThrow(() -> new RuntimeException("Registro no encontrado"));

        // Campos a excluir en la copia de propiedades
        Set<String> excludeFields = Set.of("idAntecedentePatologico");

        // Copiar solo los campos no nulos del objeto fuente al objeto destino
        BeanUtils.copyProperties(antecedentesActulizado, antecedente,
                helpers.getNullPropertyNames(antecedentesActulizado, excludeFields));

        return antecedentesPRepository.save(antecedente);
    }

    @Override
    @Transactional
    public AntecedentesNoPatologicos actualizarAntecedentesNoPatologicos(Long id,
            AntecedentesNoPatologicos antecedentesActulizado) {

        AntecedentesNoPatologicos antecedente = antecedentesNPRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registro no encontrado"));

        // Campos a excluir en la copia de propiedades
        Set<String> excludeFields = Set.of();

        // Copiar solo los campos no nulos del objeto fuente al objeto destino
        BeanUtils.copyProperties(antecedentesActulizado, antecedente,
                helpers.getNullPropertyNames(antecedentesActulizado, excludeFields));

        return antecedentesNPRepository.save(antecedente);
    }

    @Override
    @Transactional
    public AntecedentesFam addAntecedentesFamiliares(Long idPaciente, AntecedentesFam antecedente) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        // Agrega el antecedente a la lista
        paciente.addAntecedenteFam(antecedente);

        // Guarda el paciente con los nuevos datos
        pacienteRepository.save(paciente);

        // Obtiene el último antecedente agregado de manera eficiente
        return paciente.getAntecedentesFams().stream()
                .max(Comparator.comparing(AntecedentesFam::getIdAntecedenteFam)) // Suponiendo que ID es autoincremental
                .orElseThrow(() -> new RuntimeException("No se pudo obtener el antecedente agregado"));
    }

    @Override
    @Transactional
    public void deleteAntecedentesFamiliares(Long idAntecedente, Long idPaciente) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        paciente.removeAntecedenteFam(idAntecedente);
        pacienteRepository.save(paciente); // Guarda los cambios
    }

    @Override
    @Transactional
    public HospitalizacionesPrevias addHospitalizaciones(Long idPaciente, HospitalizacionesPrevias hospitalizacion) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        // Agrega el antecedente a la lista
        paciente.addHospitalizacion(hospitalizacion);

        // Guarda el paciente con los nuevos datos
        pacienteRepository.save(paciente);

        // Obtiene el último antecedente agregado de manera eficiente
        return paciente.getHospitalizacionesPrevias().stream()
                .max(Comparator.comparing(HospitalizacionesPrevias::getIdHospitalizacion)) // Suponiendo que ID es
                                                                                           // autoincremental
                .orElseThrow(() -> new RuntimeException("No se pudo obtener el antecedente agregado"));
    }

    @Override
    @Transactional
    public void deleteHospitalizaciones(Long idPaciente, Long idHospitalizacion) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        paciente.removeHospitalizacion(idHospitalizacion);
        pacienteRepository.save(paciente); // Guarda los cambios
    }

    @Override
    @Transactional
    public EnfermedadCronica addEnfermedadesCronicas(Long idPaciente, EnfermedadCronica enfermedad) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        // Agrega el antecedente a la lista
        paciente.addEnfermedadCronica(enfermedad);

        // Guarda el paciente con los nuevos datos
        pacienteRepository.save(paciente);

        // Obtiene el último antecedente agregado de manera eficiente
        return paciente.getEnfermedadesCronicas().stream()
                .max(Comparator.comparing(EnfermedadCronica::getIdEnfermedadCronica)) // Suponiendo que ID es
                                                                                      // autoincremental
                .orElseThrow(() -> new RuntimeException("No se pudo obtener el antecedente agregado"));
    }

    @Override
    @Transactional
    public void deleteEnfermedadesCronicas(Long idPaciente, Long idEnfermedad) {
        Paciente paciente = pacienteRepository.findById(idPaciente)
                .orElseThrow(() -> new RuntimeException("Paciente no encontrado"));

        paciente.removeEnfermedadCronica(idEnfermedad);
        pacienteRepository.save(paciente); // Guarda los cambios
    }

}
