import React from 'react'
import '../../App.css'
import { TextField } from '@mui/material';

export default function Admin() {
  return (
    <>
    <div className="main">
        <div className="row">
        <div className="left col-md-2 bg-dark">
            <div className="cricle">

            </div>
            <button className='btn btn-danger m-3 w-50 '> HTML</button>
            <button className='btn btn-danger m-3 w-50'> CSS</button>
            <button className='btn btn-danger m-3 w-50'> JS</button>
            <button className='btn btn-danger m-3 w-50'> REACT JS</button>
            

            <div className="logout">
            <button className='btn btn-danger m-3 w-100'> LOGOUT</button>
</div>

        </div>
        <div className="right col-md-10 bg-light">
            <div className="work1">
            <div className='text-danger fs-1 fw-bold'>QUIZ APP ADMIN</div>
            <div className='btn btn-danger h-100 '>SAVE</div>
            
            
            </div>
            <div className="row hello">
            <TextField variant='standard' className='col-md-3  px-3 m-3' label="QUIZ NAME"/>
            <TextField variant='standard' className='col-md-3  px-3 m-3' label="QUIZ DURATION"/>
            <TextField variant='standard' className='col-md-3  px-3 m-3' label="SECRET KEY"/>
            <TextField variant='standard' className='col-md-3  px-3 m-3' label="QUIZ OPEN"/>
            <TextField variant='standard' className='col-md-7  px-3 m-3' label="DESCRIPION"/>
            <button className='btn btn-danger col-md-3'>LOCK QUIZ</button>

            </div>

<div className="row m-3">
     
    <TextField variant='standard' className="col-md-12" label="QUESTION"/>
    <TextField variant='standard' className="col-md-10 mt-3" label="option"/> <button  className='btn btn-danger col-md-2 mt-3 fs-1 fw-bold h-50'>+</button>


    
</div>
<div className="row mt-5 m-5" >
<TextField variant='standard' className="col-md-4" label="option 1"/>
<div className='col-md-4'></div>
    <TextField variant='standard' className="col-md-4" label="correct : option2"/>
    <TextField variant='standard' className="col-md-4" label="option2"/>


</div>
        </div>
        </div>
    </div>
    </>
  )
}
