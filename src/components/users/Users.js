import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
const Users = () => {
    let history = useHistory();
    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if(!session){
          history.push("/login");
        }
      }, []);
    return (
        <div>
            users
        </div>
    );
}

export default Users;
