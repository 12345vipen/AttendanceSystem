import logo from './logo.svg';
import './App.css';

import AddCollegeNames from './screens/admin/AddCollegeNames';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './utils/Navbar';
import {AuthProvider} from './context/AuthContext';

function App() {

  return (
      <>
      <AuthProvider>
      <Navbar />
        <Router>
            <Switch>
              <Route exact path="/" component={AddCollegeNames} />
            </Switch>
     
        </Router>
        </AuthProvider>
      </>

  );
}

export default App;
