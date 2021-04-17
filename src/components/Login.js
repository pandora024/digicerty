import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './LoginForm.css'
import fire from '../config/fire'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = e => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
            <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)',
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'

              />
              <MDBInput
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'
              />
              <div className='md-form pb-3'>
                <MDBInput
                  label={
                    <>
                      Accept the&nbsp;
                      <a href='#!' className='green-text font-weight-bold'>
                        Terms and Conditions
                      </a>
                    </>
                  }
                  type='checkbox'
                  id='checkbox1'
                  labelClass='white-text'
                />
              </div>
            
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='#!' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBContainer>
    )
}

export default Login;