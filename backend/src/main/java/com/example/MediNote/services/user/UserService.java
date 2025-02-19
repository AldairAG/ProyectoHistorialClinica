package com.example.MediNote.services.user;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import com.example.MediNote.entities.Usuario;

public interface UserService {
    Usuario registrarUsuario(Usuario usuario,String rolNombre);

    Map<String, Object> login(String email,String password);

    Usuario actualizarUsuario(Long idUsuario, Usuario usuarioActualizado);

    void eliminarUsuario(Long idUsuario);

    Optional<Usuario> obtenerUsuarioPorId(Long idUsuario);

    List<Usuario> obtenerTodosLosUsuarios();

    Usuario asignarRoles(Long idUsuario, Set<String> nombresRoles);

    void cambiarContrasena(Long idUsuario, String contrasenaActual, String nuevaContrasena);

    Usuario validarToken(String token);

    void recuperarContrasena(String email);

    void verificarEmail(String tokenVerificacion);

    List<Usuario> obtenerUsuariosPorRol(String nombreRol);

    









}
