// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usar localStorage como almacenamiento
import { combineReducers } from 'redux';

import authReducer from './sliders/authSlice'; // Importa el slice de autenticación
import pacienteReducer from './sliders/pacienteSlice'; // Importa el slice de paciente
import citasReducer from './sliders/citaSlice'; // Importa el slice de citas

// Configuración de Redux-Persist
const persistConfig = {
  key: 'root', // Clave bajo la cual se guardará el estado
  storage, // Almacenamiento (localStorage por defecto)
  whitelist: ['auth','paciente'], // Solo persistir el slice 'auth' (opcional)
};

// Combina todos los reducers
const rootReducer = combineReducers({
  auth: authReducer,
  paciente:pacienteReducer,
  cita:citasReducer,
});

// Aplica persistencia al reducer combinado
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura el store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Desactiva la verificación de serialización (necesario para Redux-Persist)
    }),
});

// Exporta el persistor
export const persistor = persistStore(store);