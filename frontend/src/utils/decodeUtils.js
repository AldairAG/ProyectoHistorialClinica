import {jwtDecode} from 'jwt-decode';

export const getRolesFromToken = (token) => {
  if (!token) return [];

  try {
    const decodedToken = jwtDecode(token); // Decodifica el token

    return Array.isArray(decodedToken.roles)
      ? decodedToken.roles.map((role) => role.nombre || role.name || role.id) // Ajusta según la estructura de roles
      : [];

    
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return [];
  }
};