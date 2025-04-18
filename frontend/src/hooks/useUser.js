import { loginService } from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, selectCurrentUser, selectUserRoles, selectSiderBar, openClose, selectLoading, setLoading } from '../store/sliders/authSlice';
import { useHistory } from 'react-router-dom';
import { USER_ROUTES } from "../constants/routes";
import { getRolesFromToken } from '../utils/decodeUtils';

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

    const registro = (values) => {
        //llamar al servicio de registro
        //verficar el registro
        //mandar a llamr el login
    }



    const openCloseMenuBar = () => {
        dispatch(openClose());
    }

    return {
        user,
        roles,
        menuBar,
        loading,
        login,
        navigateTo,
        openCloseMenuBar,
        changeLoading,
    }
}