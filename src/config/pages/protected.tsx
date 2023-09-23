import React, { useEffect, useState } from 'react'
import { fbAuth } from '../firebasemethod'
import { useNavigate } from 'react-router-dom'
import Login from './login'

export default function Protected(props:any) {
    const {Screen} = props

    const [loader ,SetLoader ] =useState<any>(true)
    let navigate = useNavigate()
    let fun = ()=>{
    SetLoader(true)
fbAuth().then(res=>{
    SetLoader(false)
}).catch(err=>{
    SetLoader(false)
    navigate('./login')
    console.log(err)
})
}
useEffect(()=>{fun()},[])
  return loader ?   (
    <div>
<h1>loading ...</h1>
          </div>
  ):(
    <>
    <Screen/>

    </>
  )
}
