/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserLaytout from "./layout/UserLayout"
import { Provider } from 'react-redux'; // Importa el Provider de react-redux
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/Store'; // Importa el store que acabas de crear
import Login from "./pages/user/Login";
import { ToastContainer, Bounce } from "react-toastify";
import './index.css'
import { USER_ROUTES } from "./constants/routes"
import RegistrarUser from "./pages/user/RegistrarUser";
import LandingPage from "./pages/LandingPage";

function App() {

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <div className="relative overflow-hidden bg-white w-full h-screen ">

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />

          <BrowserRouter>
            <Switch>
              <Route path={USER_ROUTES.LAYOUT} component={UserLaytout} />
              <Route path={USER_ROUTES.LANDING_PAGE} component={LandingPage} />
            </Switch>
          </BrowserRouter>
        </div>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
