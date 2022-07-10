import { useState } from "react";
import { Form, Button } from "../atoms";
import { InputContainer } from "../molecules";
import { useNavigate, Link } from "react-router-dom";
import { app } from '../resources/firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

export default function SignUp(){
  const [screenname, setScreenname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const buttonAction = (e) => {
    e.preventDefault();
    const authentication = getAuth();

    createUserWithEmailAndPassword(authentication, email, password)
    .then((response) => {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        navigate('/dashboard')
    })
    .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          alert('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          alert('Please check the Email');
        }
      })
  }
  return (
      <Form
        setEmail={setEmail}
        setPassword={setPassword}
        setScreenname={setScreenname}
      >
        <InputContainer
            inputName="email"
            value={email}
            inputAction={(e) => setEmail(e.target.value)}
            inputClass="authentication__input--text"
            labelName="Email"
        />
        <InputContainer
            inputName="screenname"
            value={screenname}
            inputAction={(e) => setScreenname(e.target.value)}
            inputClass="authentication__input--text"
            labelName="Screen Name"
        />
        <InputContainer
            inputName="password"
            value={password}
            inputAction={(e) => setPassword(e.target.value)}
            inputClass="authentication__input--text"
            labelName="Password"
        />
        <Button
            buttonAction={buttonAction}
            label="Submit"
        />
        <p>Already have an account? 
            <Link
                to={'/auth'}
            >Login now.</Link>
        </p>
    </Form>
  );
}