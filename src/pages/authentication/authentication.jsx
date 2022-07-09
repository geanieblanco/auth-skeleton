import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";

export default function Authentication(props) {
    const type = props.type;
    const [screenname, setScreenname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const BottomLinks = () => {
        if (type === 'new') {
            return (
                <p>Already have an account? 
                    <Link
                        to={'/auth'}
                    >Login now.</Link>
                </p>
            );
        } else {
            return (
                <p>Need an account? 
                    <Link
                        to={'/auth/new'}
                    >Register now.</Link>
                </p>
            );
        }
    }

    const handleAction = () => {
        console.log('change');
    }

    return(
      <section>
        <h2>{props.title}</h2>
        <Form
            type={type}
            setEmail={setEmail}
            setPassword={setPassword}
            setScreenname={setScreenname}
        />
        {BottomLinks(props)}
      </section>
    );
  }