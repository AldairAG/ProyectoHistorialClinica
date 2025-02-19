import { Route, Switch } from "react-router-dom"
import { USER_ROUTES } from "../constants/ROUTES";
import Home from "../pages/user/home";
import HeaderNav from "../components/navigation/HeaderNav";
import SiderBarNav from "../components/navigation/SiderBarNav";
import BreadCrumbs from "../components/breadcrumbs/BreadCrum";
import PacientesList from "../pages/user/PacientesList";
import CreatePaciente from "../pages/user/CreatePaciente";

const UserLaytout = () => {
    return (
        <section>
            <HeaderNav />

            <div className="flex h-screen w-screen">
                <div className="w-auto">
                    <SiderBarNav />
                </div>

                <div className="flex-col w-full " >
                    <div className="bg-gray-100 px-6">
                        <BreadCrumbs />
                    </div>

                    <div className="px-6 py-5 h-[calc(100%-64px)] overflow-auto flex flex-col gap-3">
                        <div>
                            <Switch>
                                <Route path={USER_ROUTES.HOME} component={Home} />
                                <Route path={USER_ROUTES.PACIENTES_LIST} component={PacientesList} />
                                <Route path={USER_ROUTES.CREATE_PACIENTE} component={CreatePaciente} />
                            </Switch>
                        </div>
{/*                         <footer className="bg-amber-800 h-12 border-2 mt-auto">
                            footer
                        </footer> */}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default UserLaytout;