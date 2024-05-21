import React, { useState } from "react";
import './Component.css'
import { Link,useNavigate } from "react-router-dom";
import Alert from "./Alert";

const LogIn = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate()
    const [alertClass,setAlertClass] = useState("")
    const [msg,setMsg] = useState("")
    const [err,setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:4000/api/auth/loginUser",{
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({email:email,password:password}),
        })
        const json = await response.json()
        console.log(json)
        if(json.success){
          //redirect to home
          localStorage.setItem('token',json.token)
          navigate('/')
        }else{
          setAlertClass("danger")
          setMsg("Invalid Credentials")
          setErr(true)
          setEmail("")
          setPassword("")
          setTimeout(()=>{
            setErr(false)
          },3000)
        }
        
    }
  return (
    <>
    {err && <Alert class={alertClass} message={msg}/>}
      <div className="container" style={{marginTop:'150px'}}>
        <div className="row ">
          <div className="col-lg-6 m-auto bg-info rounded">
            <form action="" className="p-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label login-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label login-label">
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
              <div className="mb-1 d-flex align-items-center justify-content-center">
                <button type="submit" className="btn btn-primary">LogIn</button>
              </div>
            </form>
            <p className="text-center">New to iNotebook ? <Link to='/signup'>SignUp Here!</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
