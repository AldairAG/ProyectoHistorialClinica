import { loginService } from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, selectCurrentUser, selectUserRoles, selectSiderBar, openClose, selectLoading, setLoading } from '../store/sliders/authSlice';
import { useHistory } from 'react-router-dom';
import { USER_ROUTES } from "../constants/routes";
import { getRolesFromToken } from '../utils/decodeUtils';
import { registerService } from "../services/authService";

export const useUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(selectCurrentUser);
    const roles = useSelector(selectUserRoles);
    const menuBar = useSelector(selectSiderBar);
    const loading = useSelector(selectLoading)

    const changeLoading = () => {
        dispatch(setLoading())
    }

    const setCredentialsToState = (user, token) => {
        dispatch(setCredentials({ user, token }));
    }

    const navigateTo = (to) => {
        history.push(to);
        changeLoading()
    }

    const login = async (values) => {
        try {
            const { user, token } = await loginService(values.email, values.password);
            const roles = getRolesFromToken(token)
            if (roles.includes('DOCTOR')) {
                navigateTo(USER_ROUTES.HOME); // Redirige a la página de inicio del doctor
            } else if (roles.includes('ADMIN')) {
                console.log("Aún no está creado");
            }
            dispatch(setCredentials({ user, token }));
        } catch (err) {
            console.log(err.message);
        }
    };

    const registro = async (data) => {
        try {
            const response = await registerService(data);

            if (response && response.token && response.user) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
                setCredentialsToState(response.user, response.token);
            }
            
        } catch (error) {
            console.log(error.errorMessage);
            throw error; // o puedes manejar errores aquí si prefieres
        }
    };



    const openCloseMenuBar = () => {
        dispatch(openClose());
    }

    return {
        user,
        roles,
        menuBar,
        loading,
        login,
        registro,
        navigateTo,
        openCloseMenuBar,
        changeLoading,
    }
}