export default function Button(props) {
    return (
        <button
            onClick={props.buttonAction}
        >{props.label}</button>
    );
}