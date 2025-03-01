package com.example.MediNote.entities.historia_clinica;

import com.example.MediNote.constants.ERROR_MESSAGES;
import com.example.MediNote.entities.Paciente;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class AntecedentesNoPatologicos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAntecedenteNoPatologico;

    // Datos del hogar
    private String vivienda;
    private String materialPared;
    private String materialPiso;
    private String materialTecho;
    private Integer habitaciones;
    private Integer habitantes;
    private Boolean zoonosis;
    // servicios
    private Boolean aguaPotable;
    private Boolean electricidad;
    private Boolean drenaje;
    private Boolean gas;
    private Boolean sanitario;

    // dieta
    @Pattern(regexp = "SANA|REGULAR|MALA", message = ERROR_MESSAGES.VALOR_NO_PERMITIDO)
    private String dieta;
    private Integer comidasDiarias;
    @Pattern(regexp = "SANA|REGULAR|MALA", message = ERROR_MESSAGES.VALOR_NO_PERMITIDO)
    private String higieneBucaL;
    private Integer evacuacionesDiarias;
    private Integer ingestaCarneBlanca;
    private Integer ingestaCarneRoja;
    private Integer ingestaCarnePuerco;
    private Integer ingestaPescado;
    private Integer ingestaMariscos;
    private Integer ingestaDulces;
    private Integer ingestaCereales;
    private Integer ingestaVerduras;
    private Integer ingestaFrutas;
    private Integer ingestaLeguminosas;

    @OneToOne
    @JoinColumn(name = "id_paciente")
    @JsonIgnore
    private Paciente paciente;
}
