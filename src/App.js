// import logo from './logo.svg';
import './App.scss';
import Nav from './components/navigation/Nav';
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState, useEffect} from 'react';
// import _ from 'lodash';
import AppRoutes from './routes/AppRoutes';

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
      <div className='app-header'>
        <Nav/>
      </div>
    <div className='app-container'>
      <AppRoutes/>
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
