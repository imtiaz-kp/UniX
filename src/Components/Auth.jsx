import React, { useContext, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';


function Auth({ register }) {
    const {isAuthorized,setIsAuthorized}=useContext(tokenAuthorisationContext)
    const navigate=useNavigate()
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })
    const isRegisterForm = register ? true : false
    const handleRegister= async (e)=>{
        e.preventDefault()
        const {username,email,password}=userData
        if(!username || !email || !password){
            toast.info("please fill the form completely")
        }else{
             const result = await registerAPI(userData)
             if(result.status===200){
             toast.info(`${result.data.username} has registered successfully!!`)
            setUserData({
                username:"",email:"",password:""
            }) 
            navigate('/login')
            }else{
                toast.warning(result.response.data)
            }
        }

    }
    const handleLogin= async (e)=>{
        e.preventDefault()
        const {email,password}=userData
        if( !email || !password){
            toast.info("please fill the form completely")
        }else{
             const result = await loginAPI(userData)
             if(result.status===200){
                setIsAuthorized(true)
                    
                
              
              sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
              sessionStorage.setItem("token",result.data.token)
            setUserData({
              email:"",password:""
            }) 
            navigate('/')
            }else{
                toast.warning(result.response.data)
            }
        }
    }
    return (
        <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center'>
          <div className='w-75 container'>
            <Link to={'/'} style={{ textDecoration: "none", color: 'blue' }}>
              <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
            </Link>
            <div style={{ backgroundColor: "rgb(106, 27, 154)" }} className="card shadow p-4">
              <div className='row align-items-center'>
                <div className='col-lg-6 mb-3 mb-lg-0'>
                  <img className='w-100' src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-login-access-denied-vector-illustration-png-image_6041367.png" alt="" />
                </div>
                <div className='col-lg-6'>
                  <div className="d-flex align-items-center flex-column">
                    <h1 className='fw-bolder text-light mt-2'>
                      <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX
                    </h1>
                    <h5 className='fw-bolder mt-4 pb-3 text-light'>
                      {isRegisterForm ? 'Sign Up to Your Account' : 'Sign In to Your Account'}
                    </h5>
                    <Form className='text-light w-100'>
                      {isRegisterForm && (
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                          <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
                        </Form.Group>
                      )}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
                      </Form.Group>
                      {isRegisterForm ? (
                        <div>
                          <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                          <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                        </div>
                      ) : (
                        <div>
                          <button onClick={handleLogin} className='btn btn-light mb-2'>Login</button>
                          <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                        </div>
                      )}
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer position='top-right' autoClose={2000} theme='colored' />
        </div>
      );
    }
    
    export default Auth;