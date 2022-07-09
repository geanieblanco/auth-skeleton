import { useState } from "react";
import { app } from '../resources/firebase/config';
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default function Form(props){
    const [screenname, setScreenname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const buttonAction = (e) => {
        e.preventDefault();
        const authentication = getAuth();

        if (props.type === 'new') {
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
        } else if (props.type === 'existing') {
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
    }

    return (
        <form>
            <input
                placeholder="Screen Name"
                value={screenname}
                onChange={(e) => setScreenname(e.target.value)}
                name="screen name"
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
            />
            <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
            />
            <button
                label="Sign Up"
                onClick={buttonAction}>
                Submit
            </button>
        </form>
    );
}