package com.example.MediNote.entities.historia_clinica;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.entities.Paciente;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.example.MediNote.constants.CUANTIFICACIONES;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class AntecedentesPatologicos {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idAntecedentePatologico;

        private String enfermadesInfancia;

        // adicciones
        @Pattern(regexp = CUANTIFICACIONES.FRECUENCIA_TOXICA_SI + "|" + CUANTIFICACIONES.FRECUENCIA_TOXICA_NO
                        + "|"
                        + CUANTIFICACIONES.FRECUENCIA_TOXICA_OCACIONAL, message = ERROR_MESSAGES.VALOR_NO_PERMITIDO)
        private String tabaquismo;
        private Integer cigarrillosDia;
        private Integer tiempoFumando;
        private Float indiceTabaquico;

        @Pattern(regexp = CUANTIFICACIONES.FRECUENCIA_TOXICA_SI + "|" + CUANTIFICACIONES.FRECUENCIA_TOXICA_NO
                        + "|"
                        + CUANTIFICACIONES.FRECUENCIA_TOXICA_OCACIONAL, message = ERROR_MESSAGES.VALOR_NO_PERMITIDO)
        private String alcoholismo;
        private Float copasSemanales;
        private Integer tiempoTomando;

        private String otrasToxinas;

        private String alergias;
        private String traumaticos;
        private String cirugias;
        private String transfusiones;
        private String exposicionBiomasa;

        @OneToOne
        @JoinColumn(name = "id_paciente")
        @JsonIgnore
        private Paciente paciente;
}

