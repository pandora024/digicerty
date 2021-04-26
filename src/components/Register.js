import React, { useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    
    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput name={name} label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" onChange={(e)=> setName(e.target.value)} />
          <MDBInput name={email} label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" onChange={(e)=> setEmail(e.target.value)}/>
          <MDBInput name={password} label="Your password" icon="lock" group type="password" validate onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="text-center">
          <MDBBtn color="primary" onClick={signup}>Register</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
        </div>
    )
}

export default Register