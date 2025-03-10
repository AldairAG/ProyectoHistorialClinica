import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pacientesList: [],
  pacienteSelect: {
    antecedentesFams: [],
    antecedentesNoPatologicos: {
      aguaPotable:false,
      comidasDiarias: null,
      dieta: "",
      drenaje:false,
      electricidad:false,
      evacuacionesDiarias: null,
      gas:false,
      higieneBucal: "",
      idAntecedenteNoPatologico: null,
      ingestaCarneBlanca: null,
      ingestaCarnePuerco: null,
      ingestaCarneRoja: null,
      ingestaCereales: null,
      ingestaDulces: null,
      ingestaFrutas: null,
      ingestaLeguminosas: null,
      ingestaMariscos: null,
      ingestaPescado: null,
      ingestaVerduras: null,
      materialPared: "",
      materialPiso: "",
      materialTecho: "",
      sanitario:false,
      vivienda: "",
      zoonosis:false
    },
    antecedentesPatologicos: {
      alcoholismo: "",
      alergias: "",
      cirugias: "",
      enfermadesInfancia: "",
      exposicionBiomasa: "",
      idAntecedentePatologico: null,
      otrasToxinas: "",
      tabaquismo: "",
      transfusiones: "",
      traumaticos: ""
    },
    domicilio: "",
    edad:  null,
    enfermedadesCronicas: [],
    escolaridad: "",
    estadoCivil: "",
    grupoSanguineo: "",
    hospitalizacionesPrevias: [],
    idPaciente: null,
    lugarNacimiento: "",
    nombre: "",
    ocupacion: "",
    religion: "",
    sexo: "",
    telefono: ""
  }
};

const pacienteSlice = createSlice({
  name: 'paciente',
  initialState,
  reducers: {
    setPaciente: (state, action) => {
      state.pacienteSelect = action.payload;
      localStorage.setItem('paciente', action.payload); // Guardar en localStorage
    },
    setPacientesList: (state, action) => {
      state.pacientesList = action.payload;
      localStorage.setItem('pacienteList', action.payload); // Guardar en localStorage  
    }
  },
});

export const { setPaciente, setPacientesList } = pacienteSlice.actions;

// Selector para verificar si el usuario está autenticado
export const selectPacienteSelect = (state) => state.paciente.pacienteSelect;
export const selectPacienteList = (state) => state.paciente.pacientesList;

export default pacienteSlice.reducer;