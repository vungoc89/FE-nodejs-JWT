
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import Login from '../components/login/Login';
  import Register from '../components/register/Register';
  import Users from '../components/users/Users';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = (props) => {
    return (
        <>
                  
      <Switch>
          
          {/* <Route path="/project">
          project
          </Route>
          <Route path="/users" >
           <Users/>
          </Route> */}
        <PrivateRoutes path="/users" component={Users} />
        {/* <PrivateRoutes path="/users" component={Users} /> */}

          <Route path="/login" >
           <Login/>
          </Route>
          <Route path="/register" >
           <Register/>
          </Route>
         
          <Route path="/" exact>
            home
          </Route>
          <Route path="*">
            404 not found!
          </Route>
        </Switch>
        </>
    );
}

export default AppRoutes;
