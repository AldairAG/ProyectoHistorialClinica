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

import com.example.MediNote.DTO.UserLogged;
import com.example.MediNote.auth.AuthService;
import com.example.MediNote.entities.Perfil;
import com.example.MediNote.entities.Rol;
import com.example.MediNote.entities.Usuario;
import com.example.MediNote.repositories.UserRepository;
import com.example.MediNote.services.rol.RolService;

@Service
public class UserImpl implements UserService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RolService rolService;

    @Autowired
    private UserRepository repository;

    @Autowired
    private AuthService authService;

    public Usuario registrarUsuario(Usuario usuario, String rolNombre) {
        // Encriptar la contraseña
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));

        // Asignar roles
        Set<Rol> roles = new HashSet<>();

        Rol rol = rolService.findByNombre(rolNombre)
                .orElseThrow(() -> new RuntimeException("Rol no encontrado"));

        roles.add(rol);
        usuario.setRoles(roles);

        // Crear perfil
        Perfil perfil = usuario.getPerfil();
        usuario.setPerfil(perfil);
        perfil.setUsuario(usuario);

        return repository.save(usuario);
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
                .email(email)
                .nombre(usuario.getPerfil().getNombre())
                .apellidoMaterno(usuario.getPerfil().getApellidoMaterno())
                .apellidoPaterno(usuario.getPerfil().getApellidoPaterno())
                .cedula(usuario.getPerfil().getCedula())
                .cedulaEspecialidad(usuario.getPerfil().getCedulaEspecialidad())
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
