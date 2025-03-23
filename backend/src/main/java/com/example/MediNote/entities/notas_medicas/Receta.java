package com.example.MediNote.entities.notas_medicas;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;

import com.example.MediNote.entities.Paciente;
import com.example.MediNote.entities.Usuario;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Receta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idReceta;

    // Relación muchos a uno con Paciente
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_paciente", nullable = false)
    @JsonBackReference
    private Paciente paciente;

    // Relación muchos a uno: un paciente pertenece a un doctor
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_doctor", nullable = false)
    @JsonBackReference
    private Usuario doctor;

            // Campo de fecha de creación automático
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.DATE) // Indica que solo queremos la fecha
    @CreationTimestamp // Hibernate coloca la fecha automáticamente al guardar
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy") // Formato PostgreSQL
    private Date fechaCreacion;

    @OneToOne
    @JoinColumn(name = "id_nota_medica")
    @JsonBackReference
    private NotaMedica notaMedica;

    // Relación uno a muchos: un doctor tiene muchos pacientes
    @OneToMany(mappedBy = "receta", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @Builder.Default
    @JsonManagedReference
    private List<Tratamiento> tratamientos = new ArrayList<>();

}
