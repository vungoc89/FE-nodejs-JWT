// import logo from './logo.svg';
import './App.scss';
import Nav from './components/navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/users/Users';
import {useState, useEffect} from 'react';
import _ from 'lodash';

function App() {
const [account, setAccount] = useState("");

useEffect(() => {
  let session = sessionStorage.getItem('account');
  if(session){
    setAccount(JSON.parse(session));//JSON.parse(): convert string to object
  }
}, []);

  return (
    <>
    <Router>
    <div className='app-container'>
      {account && !_.isEmpty(account) && account.isAuthenticated && <Nav/>}
      
      <Switch>
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
          contact
          </Route>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/login" >
           <Login/>
          </Route>
          <Route path="/register" >
           <Register/>
          </Route>
          <Route path="/users" >
           <Users/>
          </Route>

          <Route path="*">
            404 not found!
          </Route>
        </Switch>
    </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
    </Router>
    </>
  );
}

export default App;
