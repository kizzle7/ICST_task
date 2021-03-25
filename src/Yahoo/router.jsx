import React from 'react';
import {BrowserRouter as Router, Link, Switch, Redirect, Route} from 'react-router-dom';
import Home from './index';
import Dashboard from './dashboard';
import Login from './login';





class Show extends React.Component{
    render(){ 
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />    
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/login" exact component={Login} />
                       
                    </Switch>
                </Router>
            
                </div>
        )
    }
}
export default Show;