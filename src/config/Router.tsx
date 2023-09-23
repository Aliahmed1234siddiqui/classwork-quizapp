import React from 'react'
import { BrowserRouter as Routers , Routes ,Route } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Protected from './pages/protected'
import Task from './pages/Task'
import Admin from './pages/admin'
export default function Router() {
  return (

    <div>
      <Routers>
        <Routes>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}></Route>
            <Route path='/' element={<Protected screen={Task}/>}></Route>
            <Route path='admin' element={<Admin/>}></Route>


        </Routes>
      </Routers>


    </div>
  )
}
