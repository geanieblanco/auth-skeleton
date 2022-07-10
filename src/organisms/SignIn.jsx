import { useState } from "react";
import { Form, Button } from "../atoms";
import { InputContainer } from "../molecules";
import { useNavigate, Link } from "react-router-dom";
import { app } from '../resources/firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const buttonAction = (e) => {
        e.preventDefault();
        const authentication = getAuth();

        signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
            navigate('/dashboard')
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email Already in Use');
            }
            })
    }

    return (
        <Form
            setEmail={setEmail}
            setPassword={setPassword}
        >
            <InputContainer
                inputName="email"
                value={email}
                inputAction={(e) => setEmail(e.target.value)}
                inputClass="authentication__input--text"
                labelName="Email"
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
            <p>Need an account? 
                <Link
                    to={'/auth/new'}
                >Register now.</Link>
            </p>
        </Form>
    );
}