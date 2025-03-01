import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pacientesList: [],
  pacienteSelect:{}
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