package com.example.MediNote.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.entities.notas_medicas.NotaMedica;
import com.example.MediNote.entities.notas_medicas.Receta;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    @Column(unique = true, nullable = false)
    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    @Email(message = ERROR_MESSAGES.FORMATO_INVALIDO)
    private String email;

    @NotBlank(message = ERROR_MESSAGES.CAMPO_VACIO)
    // @Email(message = ERROR_MESSAGES.CONTRASENA_INVALIDA)
    private String password;

    @OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private Perfil perfil;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "usuario_rol", joinColumns = @JoinColumn(name = "id_usuario"), inverseJoinColumns = @JoinColumn(name = "id_rol"))
    @Builder.Default
    private Set<Rol> roles = new HashSet<>();

    // Relación uno a muchos: un doctor tiene muchos pacientes
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    private List<Paciente> pacientes = new ArrayList<>();

    // Relación uno a muchos: un doctor tiene muchos pacientes
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    @JsonManagedReference("usuario-notas")
    private List<NotaMedica> notasMedicas = new ArrayList<>();

    // historial clinico
    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    @JsonManagedReference("usuario-receta")
    private List<Receta> recetas = new ArrayList<>();

    // Método para agregar un paciente al doctor
    public void agregarPaciente(Paciente paciente) {
        this.pacientes.add(paciente);
        paciente.setDoctor(this); // Establece la relación inversa
    }
}
