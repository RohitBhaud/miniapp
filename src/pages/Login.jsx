import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../Redux/AuthReducer/action'

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in")
  const [password ,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname|| "/"

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email , password})).then((r)=>{
         if(r.type === "USER_LOGIN_SUCCESS"){
           navigate(comingFrom,{replace:true});
         }
      })
    }
  }
  return (
    <div>
      <LoginWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <label>User Mail</label>
            <input type="email"
             placeholder='Enter Email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
          </div>
          <div>
            <label>User Password</label>
            <input type="password"
             placeholder='Enter Password'
             value={password}
             onChange={e=> setPassword(e.target.value)}
            />
          </div>
         <button type='submit'>LOGIN</button>
        </form>
        </LoginWrapper>
    </div>
  )
}

export default Login

const LoginWrapper = styled.div`
 display:flex;
 width:300px;
 flex-direction:column;
 align-items:center;
 margin:auto;
 `
