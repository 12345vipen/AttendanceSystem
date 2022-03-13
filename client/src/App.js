
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddCollegeNames from './screens/admin/AddCollegeNames';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './utils/Navbar';
import AccountProvider, {AuthProvider} from './context/AuthContext';
import { AdminDashboard } from './screens/admin/AdminDashboard';
import Login from './Authentication/Login';

function App() {

  return (
      <>
      <AccountProvider>
      <Navbar />
        <Router>
            <Switch>
              <Route exact path="/" component={AddCollegeNames} />
              <Route exact path="/AdminDashboard" component={AdminDashboard} />
              <Route exact path='/login' component={Login} />
            </Switch>
     
        </Router>
        </AccountProvider>
      </>

  );
}

export default App;
