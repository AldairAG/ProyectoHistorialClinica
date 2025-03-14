import { createSlice } from '@reduxjs/toolkit';
import { getRolesFromToken } from "../../utils/decodeUtils"
import { createSelector } from 'reselect';

const initialState = {
  user: {
    apellidoMaterno: "",
    apellidoPaterno: "",
    cedula: "",
    cedulaEspecialidad: "",
    email: "",
    nombre: "",
    universidad: "",
  },
  token: null,
  menuSiderBarOpen: true,
  loading:true
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;

      state.user = user;
      state.token = token;
      localStorage.setItem('token', token); // Guardar el token en localStorage
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); // Eliminar el token al cerrar sesión
    },
    openClose: (state) => {
      state.menuSiderBarOpen = !state.menuSiderBarOpen;
    },
    setLoading: (state,{payload}) => {
      state.loading = payload;
    },
  },
});

export const { setCredentials, logout, openClose,setLoading } = authSlice.actions;

// Selector para verificar si el usuario está autenticado
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectSiderBar = (state) => state.auth.menuSiderBarOpen;
export const selectLoading = (state) => state.auth.loading;

// Selector memorizado para obtener los roles
export const selectUserRoles = createSelector(
  [selectCurrentToken], // Dependencias del selector
  (token) => {
    if (!token) return [];
    return getRolesFromToken(token); // Decodifica el token y obtiene los roles
  }
);
export default authSlice.reducer;