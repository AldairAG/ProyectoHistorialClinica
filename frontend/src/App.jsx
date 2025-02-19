import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { USER_ROUTES } from "./constants/ROUTES"
import UserLaytout from "./layout/UserLayout"
import { Provider } from 'react-redux'; // Importa el Provider de react-redux
import Store from './store/Store'; // Importa el store que acabas de crear
import { ToastContainer, Bounce } from 'react-toastify';
import Login from "./pages/user/Login";
import './index.css'

const history = createBrowserHistory(); // Crea el historial
function App() {

  return (
    <Provider store={Store}>
      <div className="bg-slate-500 w-screen h-screen overflow-hidden">

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick={false}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="light"
          transition={Bounce} />

        <Router history={history}>
            <Switch>
              <Route path={USER_ROUTES.LAYOUT} component={UserLaytout} />
              <Route path={USER_ROUTES.LOGIN} component={Login} />
            </Switch>

        </Router>
      </div>
    </Provider>
  )
}

export default App
