/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentToken } from '../../store/sliders/authSlice';
import { getRolesFromToken } from '../../utils/decodeUtils';

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = useSelector(selectCurrentToken);
  const userRoles = getRolesFromToken(token);

  if (!token || userRoles.length === 0) {
    return <Navigate to="/login" />;
  }

  // Verifica si el usuario tiene al menos uno de los roles permitidos
  const hasPermission = userRoles.some((role) => allowedRoles.includes(role));

  if (!hasPermission) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;