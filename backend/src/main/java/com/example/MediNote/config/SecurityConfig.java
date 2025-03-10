package com.example.MediNote.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import com.example.MediNote.auth.JwtAuthenticationFilter;
import com.example.MediNote.auth.JwtUtil;
import com.example.MediNote.auth.JwtValidationFilter;

@Configuration
public class SecurityConfig {
        @SuppressWarnings("unused")
        private final JwtUtil jwtUtil;

        @Autowired
        private CorsConfig corsConfig;

        public SecurityConfig(JwtUtil jwtUtil) {
                this.jwtUtil = jwtUtil;
        }

        @Bean
        SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authenticationConfiguration,
                        JwtUtil jwtUtil) throws Exception {
                http.csrf(csrf -> csrf.disable()) // Desactivar CSRF (opcional, dependiendo del caso de uso)
                                .cors(cors -> cors.configurationSource(corsConfig.corsConfigurationSource())) // Habilitar
                                                                                                              // CORS
                                .sessionManagement(management -> management
                                                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Sin sesiones
                                .authorizeHttpRequests(auth -> auth
                                                .requestMatchers(HttpMethod.POST, "/mdn/auth/login").permitAll()
                                                .requestMatchers(HttpMethod.POST, "/mdn/auth/registrar").permitAll()
                                                .requestMatchers(HttpMethod.POST, "/mdn/doctor/registrarPaciente").permitAll()
                                                .requestMatchers(HttpMethod.GET, "/mdn/doctor/all/{email}").permitAll()
                                                .requestMatchers(HttpMethod.GET,"/mdn/doctor/getPacienteById/{idPaciente}").permitAll()
                                                .requestMatchers(HttpMethod.PATCH,"/mdn/doctor/actualizarPaciente/{idPaciente}").permitAll()
                                                .requestMatchers(HttpMethod.PATCH,"/mdn/doctor/actualizarANP/{id}").permitAll()
                                                .requestMatchers(HttpMethod.PATCH,"/mdn/doctor/actualizarAP/{id}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/mdn/doctor/addAH/{idPaciente}").permitAll()
                                                .requestMatchers(HttpMethod.DELETE,"/mdn/doctor/addAH/{idPaciente}/{idAntecedente}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/mdn/doctor/addHP/{idPaciente}").permitAll()
                                                .requestMatchers(HttpMethod.DELETE,"/mdn/doctor/addHP/{idPaciente}/{idHospitalizacion}").permitAll()
                                                .requestMatchers(HttpMethod.POST,"/mdn/doctor/addEC/{idPaciente}").permitAll()
                                                .requestMatchers(HttpMethod.DELETE,"/mdn/doctor/addEC/{idPaciente}/{idEnfermedad}").permitAll()
                                                
                                                
                                                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Permitir
                                                                                                        
                                                // .requestMatchers(HttpMethod.DELETE, "/users/{id}").hasRole("ADMIN")
                                                // // Solo accesible para ADMIN
                                                .anyRequest().authenticated()) // Proteger todos los demás endpoints
                                .addFilter(new JwtAuthenticationFilter(
                                                authenticationConfiguration.getAuthenticationManager(), jwtUtil)) // Filtro
                                                                                                                  // de
                                                                                                                  // autenticación
                                .addFilter(new JwtValidationFilter(
                                                authenticationConfiguration.getAuthenticationManager(), jwtUtil)); // Filtro
                                                                                                                   // de
                                                                                                                   // validación

                return http.build();
        }
}
