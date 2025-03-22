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
  },
  notaMedicaSelect:{},
  notaMedicaList:{},
  recetaList:{},
  recetaSelect:{},
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
    },
    setNotaMedica: (state, action) => {
      state.notaMedicaSelect = action.payload;
      localStorage.setItem('notaMedica', action.payload); // Guardar en localStorage
    },
    setNotaMedicaList: (state, action) => {
      state.notaMedicaList = action.payload;
      localStorage.setItem('pacienteList', action.payload); // Guardar en localStorage  
    },
    setReceta: (state, action) => {
      state.recetaSelect = action.payload;
      localStorage.setItem('receta', action.payload); // Guardar en localStorage
    },
    setRecetaList: (state, action) => {
      state.recetaList = action.payload;
      localStorage.setItem('recetaList', action.payload); // Guardar en localStorage  
    }
  },
});

export const pacienteActions = pacienteSlice.actions;

export const pacienteSelectors = {
  pacienteSelect: (state) => state.paciente.pacienteSelect,
  pacienteList: (state) => state.paciente.pacientesList,
  notaMedicaSelect: (state) => state.paciente.notaMedicaSelect,
  notaMedicaList: (state) => state.paciente.notaMedicaList,
  recetaSelect: (state) => state.paciente.recetaSelect,
  recetaList: (state) => state.paciente.recetaList
};

export default pacienteSlice.reducer;