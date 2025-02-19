// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './sliders/authSlice'; // Importa el slice de autenticación

// Configuración del store
const store = configureStore({
  reducer: {
    auth: authReducer,
    // Aquí puedes agregar más reductores si los tienes
  },
});

export default store;