import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Alert from "./Alert";
import './Component.css'

const SignUp = () => {
  const [email,setEmail] = useState("")
  const [name,setName] =  useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [isValidEmail,setIsValidEmail] = useState(false)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [err,setErr] = useState(false)
  const [msg,setMsg] = useState("")
  const [alertClass,setAlertClass] = useState("")
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/api/auth/createuser",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:name,email:email,password:password})
    })
    const json = await response.json()
    console.log(json)
    if(json.success){
        localStorage.setItem('token',json.token)
        setAlertClass('primary')
        setMsg("User Registered Successfully")
        setErr(true)
        setTimeout(()=>{
          setErr(false)
          navigate('/')
        },3000)
    }else{
      setAlertClass('primary')
      setMsg(json.error)
      setErr(true)
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setTimeout(()=>{
        setErr(false)
      },3000)
    }
  }
  return (
    <>
      {err && <Alert class={alertClass} message={msg}/>}
      <div className="container" style={{ marginTop: "150px" }}>
        <div className="row">
          <div className="col-lg-6 m-auto bg-info">
            <form action="" className="p-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label signup-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label signup-label">
                  Email Id
                </label>
                <input 
                  type="email" 
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>{
                      setEmail(e.target.value);
                      setIsValidEmail(emailPattern.test(email))
                    }
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label signup-label">
                  Password
                </label>
                <input 
                  type="password" 
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirm-password" className="form-label signup-label">
                  Confirm Password
                </label>
                <input 
                  type="password"
                  className="form-control"
                  id="confirm-password"
                  name="confirm-password" 
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mb-1 d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary" disabled={!(name.length>=3 && isValidEmail && password.length>=6 && password===confirmPassword)}>SignUp</button>
              </div>
            </form>
            <p className="text-center">Already an user ?<Link to='/login'> LogIn Here!</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
