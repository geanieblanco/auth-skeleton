import { SignIn, SignUp } from "../organisms/";

export default function Authentication(props) {
    if (props.type === 'existing') {
        return (
            <SignIn/>
        );
    } else {
        return (
            <SignUp/>
        );
    }
  }