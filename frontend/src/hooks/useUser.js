/* eslint-disable react-hooks/exhaustive-deps */
import { loginService } from '../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, selectCurrentUser, selectUserRoles,selectSiderBar,openClose } from '../store/sliders/authSlice';
import { useHistory } from 'react-router-dom';
import { USER_ROUTES } from "../constants/ROUTES";
import { useEffect } from 'react';

export const useUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(selectCurrentUser);
    const roles = useSelector(selectUserRoles);
    const menuBar = useSelector(selectSiderBar);

    // Redirige al usuario según su rol
    useEffect(() => {
        if (roles.includes('DOCTOR')) {
            navigateTo(USER_ROUTES.HOME); // Redirige a la página de inicio del doctor
        } else if (roles.includes('ADMIN')) {
            console.log("Aún no está creado");
        }
    }, [roles]);

    const navigateTo = (to) => {
        history.push(to);
    }

    const login = async (values) => {
        try {
            const { user, token } = await loginService(values.email, values.password);
            console.log(user);
            console.log(token);
            dispatch(setCredentials({ user, token }));
        } catch (err) {
            console.log(err.message);
        }
    };

    const openCloseMenuBar=()=>{
        dispatch(openClose());
    }

    return {
        user,
        roles,
        menuBar,
        login,
        navigateTo,
        openCloseMenuBar,
    }
}