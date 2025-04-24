package com.example.MediNote.services.user;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.MediNote.DTO.UserLogged;
import com.example.MediNote.auth.AuthService;
import com.example.MediNote.entities.Perfil;
import com.example.MediNote.entities.Rol;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.repositories.PerfilRepository;
import com.example.MediNote.repositories.UserRepository;
import com.example.MediNote.request.RegisterRequest;
import com.example.MediNote.services.rol.RolService;

@Service
public class UserImpl implements UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RolService rolService;
    
    @Autowired
    private PerfilRepository perfilRepository;

    @Autowired
    private UserRepository repository;

    @Autowired
    private AuthService authService;

    /**
     * Registra un nuevo usuario en el sistema con los datos proporcionados en la
     * solicitud.
     * 
     * @param request   Objeto que contiene los datos necesarios para registrar al
     *                  usuario,
     *                  incluyendo nombre, apellidos, cédula y universidad.
     * @param rolNombre Nombre del rol que se asignará al usuario.
     * 
     * @throws RuntimeException Si el rol especificado no se encuentra en el
     *                          sistema.
     * 
     *                          Este método realiza las siguientes acciones:
     *                          - Encripta la contraseña del usuario.
     *                          - Asigna el rol especificado al usuario.
     *                          - Crea y asocia un perfil al usuario con los datos
     *                          proporcionados en la solicitud.
     */

    @Override
    @Transactional
    public void registrarUsuario(RegisterRequest request, String rolNombre) {

        // Validar si ya existe un usuario con el mismo correo electrónico
        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException(
                    "Ya existe un usuario registrado con el correo electrónico: " + request.getEmail());
        }

        // Validar si ya existe un usuario con la misma cédula
        if (perfilRepository.existsByCedula(request.getCedula())) {
            throw new RuntimeException("Ya existe un usuario registrado con la cédula: " + request.getCedula());
        }

        // Encriptar la contraseña
        Usuario usuario = new Usuario();
        usuario.setEmail(request.getEmail());
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));

        // Asignar roles
        Set<Rol> roles = new HashSet<>();

        Rol rol = rolService.findByNombre(rolNombre)
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));

        roles.add(rol);
        usuario.setRoles(roles);

        // Crear perfil
        Perfil perfil = new Perfil();
        perfil.setNombre(request.getNombre());
        perfil.setApellidoPaterno(request.getApellidoPaterno());
        perfil.setApellidoMaterno(request.getApellidoMaterno());
        perfil.setCedula(request.getCedula());
        perfil.setUniversidad(request.getUniversidad());
        usuario.setPerfil(perfil);
        perfil.setUsuario(usuario);

        // Guardar el usuario y su perfil en la base de datos
        repository.save(usuario);
    }

    @Override
    public Map<String, Object> login(String email, String password) {
        // Buscar al usuario por su correo electrónico
        Usuario usuario = repository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Credenciales incorrectas"));

        // Generar un token JWT
        String token = authService.authenticate(usuario.getEmail(), password, usuario.getPassword(),
                usuario.getRoles());

        UserLogged userLogged = UserLogged.builder()
                .id(usuario.getIdUsuario())
                .email(email)
                .nombre(usuario.getPerfil().getNombre())
                .apellidoMaterno(usuario.getPerfil().getApellidoMaterno())
                .apellidoPaterno(usuario.getPerfil().getApellidoPaterno())
                .cedula(usuario.getPerfil().getCedula())
                .universidad(usuario.getPerfil().getUniversidad())
                .build();

        // Devolver el usuario y el token como respuesta
        Map<String, Object> response = new HashMap<>();
        response.put("usuario", userLogged);
        response.put("token", token);

        return response;
    }

    @Override
    public Usuario actualizarUsuario(Long idUsuario, Usuario usuarioActualizado) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'actualizarUsuario'");
    }

    @Override
    public void eliminarUsuario(Long idUsuario) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'eliminarUsuario'");
    }

    @Override
    public Optional<Usuario> obtenerUsuarioPorId(Long idUsuario) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'obtenerUsuarioPorId'");
    }

    @Override
    public List<Usuario> obtenerTodosLosUsuarios() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'obtenerTodosLosUsuarios'");
    }

    @Override
    public Usuario asignarRoles(Long idUsuario, Set<String> nombresRoles) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'asignarRoles'");
    }

    @Override
    public void cambiarContrasena(Long idUsuario, String contrasenaActual, String nuevaContrasena) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'cambiarContrasena'");
    }

    @Override
    public Usuario validarToken(String token) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'validarToken'");
    }

    @Override
    public void recuperarContrasena(String email) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'recuperarContrasena'");
    }

    @Override
    public void verificarEmail(String tokenVerificacion) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'verificarEmail'");
    }

    @Override
    public List<Usuario> obtenerUsuariosPorRol(String nombreRol) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'obtenerUsuariosPorRol'");
    }
}
