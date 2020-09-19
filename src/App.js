import React,{Component} from 'react';
import Register from './components/Register' 
import Login from './components/Login'
import Navbar from './components/Navbar'
import CityAdmin from './components/CityAdmin'
import Admin from './components/Admin'
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class App extends Component{  
    render(){
  return(   
          <Router>
                <Navbar /> 
                    <Switch>
                         <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/cityadmin" component={CityAdmin} />
                        <Route exact path="/admin" component={Admin} />
                    </Switch>
          </Router>  
        );
    }
}

export default App;
