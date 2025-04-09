import { Route, Switch } from "react-router-dom"
import { USER_ROUTES } from "../constants/routes";
import Home from "../pages/user/Home";
import HeaderNav from "../components/navigation/HeaderNav";
import SiderBarNav from "../components/navigation/SiderBarNav";
import BreadCrumbs from "../components/breadcrumbs/BreadCrum";
import PacientesList from "../pages/user/PacientesList";
import CreatePaciente from "../pages/user/CreatePaciente";
import EditHistoriaClinica from "../pages/user/EditHistoriaClinica";
import ViewPaciente from "../pages/user/ViewPaciente";
import Loader from '../components/ui/Loader'
import { useUser } from "../hooks/useUser";
import CrearNotaMedica from "../pages/user/CrearNotaMedica";
import CitasMedicas from "../pages/user/CitasMedicas";
import CrearCita from "../pages/user/CrearCita";

const UserLaytout = () => {
    const { loading } = useUser()
    return (
        <section>
            <HeaderNav />

            <div className="flex h-screen w-screen">
                <div className="w-auto print:hidden">
                    <SiderBarNav />
                </div>

                <div className="flex-col w-full " >
                    <div className="bg-gray-100 px-6 print:hidden">
                        <BreadCrumbs />
                    </div>

                    <div className="px-6 py-5 h-[calc(100%-64px)] flex flex-col gap-3 overflow-y-auto">
                        <div>
                            {loading ? (
                                <Loader />
                            ) : (
                                <Switch>
                                    <Route path={USER_ROUTES.PACIENTES_LIST} component={PacientesList} />
                                    <Route path={USER_ROUTES.CREATE_PACIENTE} component={CreatePaciente} />
                                    <Route path={USER_ROUTES.EDIT_PACIENTE} component={EditHistoriaClinica} />
                                    <Route path={USER_ROUTES.VIEW_PACIENTE + "/:id?"} component={ViewPaciente} />
                                    <Route path={USER_ROUTES.CREATE_NOTA_MEDICA + "/:id?"} component={CrearNotaMedica} />
                                    <Route path={USER_ROUTES.CITAS_MEDICAS} component={CitasMedicas} />
                                    <Route path={USER_ROUTES.CREAR_CITAS_MEDICAS} component={CrearCita} />
                                    <Route path={USER_ROUTES.HOME} component={Home} />
                                </Switch>
                            )}

                        </div>
                        <footer className=" h-12 mt-auto print:hidden">

                        </footer>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default UserLaytout;