package com.example.MediNote.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MediNote.constants.ROLES;
import com.example.MediNote.request.LoginRequest;
import com.example.MediNote.request.RegisterRequest;
import com.example.MediNote.services.user.UserService;

@RestController
@RequestMapping("/mdn/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Map<String, Object> response = userService.login(request.getEmail(), request.getPassword());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message", e.getMessage()));
        }
    }

    /**
     * Endpoint para registrar un nuevo usuario en el sistema.
     *
     * @param request Objeto de tipo RegisterRequest que contiene la información necesaria
     *                para registrar un usuario. El JSON que se debe enviar tiene el siguiente formato:
     *                <pre>
     *                {
     *                    "username": "nombreDeUsuario",
     *                    "password": "contraseña",
     *                    "email": "correo@ejemplo.com",
     *                    "nombre": "Nombre Completo",
     *                    "apellidoPaterno": "apellido",
     *                    "apellidoMaterno": "apellido",
     *                    "telefono": "123456789"
     *                }
     *                </pre>
     * @return ResponseEntity con el estado de la operación:
     *         - 200 OK si el registro fue exitoso.
     *         - 400 Bad Request si ocurrió un error durante el registro, junto con un mensaje de error.
     */
    @PostMapping("/registrar")
    public ResponseEntity<?> registrarUsuario(@RequestBody RegisterRequest request) {
        try {
            userService.registrarUsuario(request, ROLES.DOCTOR);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            // Registrar el error en los logs
            System.err.println("Error al registrar usuario: " + e.getMessage());

            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
}
