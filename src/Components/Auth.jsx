import React from 'react'
import {  Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Auth({ register }) {
    const isRegisterForm = register ? true : false
    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link to={'/'} style={{ textDecoration: "none", color: 'blue' }}> <i className="fa-solid fa-arrow-left me-1"></i>

                    Back to Home</Link>
                <div style={{ backgroundColor: "rgb(106, 27, 154)" }} className="card shadow p-5 ">
                    <div className='row align-items-center '>
                        <div className='col-lg-6'>
                            <img className='w-100' src="https://png.pngtree.com/png-vector/20220723/ourmid/pngtree-login-access-denied-vector-illustration-png-image_6041367.png" alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <div className="d-flex align-items-center flex-column">
                                <h1 className='fw-bolder text-light mt-2'> <i className="fa-brands fa-stack-overflow fa-bounce"></i> UniX </h1>
                                <h5 className='fw-bolder mt-4  pb-3 text-light'>
                                    {

                                        isRegisterForm ? 'Sign Up to your Account' : 'Sign In to your Account'

                                    }
                                </h5>
                                <Form className='text-light w-100'>
                                    {
                                        isRegisterForm &&
                                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                        
                                        <Form.Control type="text" placeholder="Username " />
                                      </Form.Group>

                                     
                                    }
                                       <Form.Group className="mb-3" controlId="formBasicEmail">
                                      
                                       <Form.Control type="email" placeholder="Enter email Id" />
                                     </Form.Group>
                                     <Form.Group className="mb-3" controlId="formBasicEmail">
                                      
                                       <Form.Control type="passwerd" placeholder="Enter Password" />                                     
                                       </Form.Group>
                                       {
                                        isRegisterForm ?
                                        <div>
                                            <button className='btn btn-light mb-2'> Register</button>
                                            <p>Already have Account? Click here to <Link to={'/login'}> Login</Link></p>
                                        </div>:
                                         <div>
                                         <button className='btn btn-light mb-2'> Login</button>
                                         <p> New User? Click here to  <Link to={'/register'}> Register</Link></p>
                                     </div>


                                       }


                                </Form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Auth