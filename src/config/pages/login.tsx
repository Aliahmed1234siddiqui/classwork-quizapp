import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextField, Button } from '@mui/material';
import { type } from 'os';
import { stringify } from 'querystring';
import { useNavigate } from 'react-router-dom';
import { fbLogin } from '../firebasemethod';
type useModel = {
  email: string,
  password: string,
}


export default function Login() {
const[model , setModel] = useState<useModel>({
  email:"",
  password:"",
})


let navigate =useNavigate()

let login= ()=>{
  fbLogin(model).then(res=>{
    navigate('./task')
  })

}

  return (
    <div className="login text-center  ">
   
   <div className="maino   mx-auto  "  >
   <div className="sub  ">
<TextField className="m-3" onChange={(e)=>{setModel({...model , email:e.target.value} )}} label="EMAIL" type='email'  variant='standard' ></TextField>
<TextField className="m-3" onChange={(e)=>{setModel({ ...model , password:e.target.value,})}} label="PASSWORD" type='password'  variant='standard' ></TextField>
        <Button variant="contained" onClick={login}>LOGIN</Button>
        </div>

   </div>
    </div>
  );
}

