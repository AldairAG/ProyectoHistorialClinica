import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  citasList: [],
  citaSelect: {
    idCita: null,
    fecha: "",
    hora: "",
    consultorio: null,
    paciente: null,
    doctor: null,
    motivo: "",
    estado: "",
  },
};

const citaSlice = createSlice({
  name: 'cita',
  initialState,
  reducers: {
    setCita: (state, action) => {
      state.citaSelect = action.payload;
      localStorage.setItem('cita', JSON.stringify(action.payload)); // Guardar en localStorage
    },
    setCitasList: (state, action) => {
      state.citasList = action.payload;
      localStorage.setItem('citasList', JSON.stringify(action.payload)); // Guardar en localStorage
    },
    clearCita: (state) => {
      state.citaSelect = initialState.citaSelect;
      localStorage.removeItem('cita'); // Eliminar de localStorage
    },
    clearCitasList: (state) => {
      state.citasList = [];
      localStorage.removeItem('citasList'); // Eliminar de localStorage
    },
  },
});

export const citaActions = citaSlice.actions;

export const citaSelectors = {
  citaSelect: (state) => state.cita.citaSelect,
  citasList: (state) => state.cita.citasList,
};

export default citaSlice.reducer;