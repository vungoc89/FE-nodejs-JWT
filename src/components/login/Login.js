import React, {useState, useEffect} from 'react';
import './Login.scss';
import {useHistory} from 'react-router-dom';
import {toast } from "react-toastify";
import { loginUser } from '../../services/userService';


const Login = (props) => {
    let history = useHistory();
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true,

    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);
    const handleCreateNewAccount = () => {
        history.push("/register");
    }

    const handleLogin = async() => {
        setObjValidInput(defaultObjValidInput);//set input default status = true

       if(!valueLogin){
        setObjValidInput({...defaultObjValidInput, isValidValueLogin: false});//reset input default status = false(error status)
        toast.error("Please enter your email address or phone number");
        return; //exist out this function
       }
       if(!password){
        setObjValidInput({...defaultObjValidInput, isValidPassword: false});//reset input default status = false(error status)
        toast.error("Please enter your password");
        return; //exist out this function
       }

      let res = await loginUser(valueLogin, password);

      if(res && res.data && +res.data.EC === 0){
        toast.success(res.data.EM);
        let data = {
            isAuthenticated: true,
            token: 'fake token'
        }
        sessionStorage.setItem('account', JSON.stringify(data));
        history.push("/users");
        //reload after login
        window.location.reload();
      }
      if(res && res.data && +res.data.EC !== 0){
        toast.error(res.data.EM);
      }
    }

    const handlePressEnter = (e) => {
        try {
            // console.log(">>> event enter: ", e.charCode);
            console.log(">>> event enter: ", e);
            if(e.keyCode === 13 && e.code === "Enter"){
                handleLogin();
            }
        } catch (error) {
            console.log(">>> event error: ", error);
        }
       
    }

    //
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if(session){
          history.push("/");
          window.location.reload();
        }
    }, []);
    return (
        <div className='login-container mt-3'> 
            <div className='container'>
                <div className='row'>
                    <div className='content-left col-12 d-none col-sm-7 d-sm-block'>
                        <div className='brand'>
                            React and Node JS
                        </div>
                        <div className='detail'>
                            Facebook helps you connect and share with the people in your life.
                        </div>
                    </div>
                    <div className='content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3'>
                        <input 
                        type="text" 
                        className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                        placeholder='Email address or phone number'
                        value={valueLogin}
                        onChange={(e) => {setValueLogin(e.target.value)}}
                        />
                        <input 
                        type="password" 
                        className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                         placeholder='Password'
                         value={password}
                         onChange={(e) => {setPassword(e.target.value)}} 
                         onKeyDown = {(e) => handlePressEnter(e)}
                         
                        />
                        <button className='btn btn-primary' onClick={()=>{handleLogin()}}>Login</button>
                        <span className='text-center forgot-password'>Forgot your password?</span>
                        <hr/>
                        <div className='text-center'>
                            <button className='btn btn-success' onClick={()=> handleCreateNewAccount()}>
                                Create new Account
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
