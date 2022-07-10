export default function InputLabel(props) {
    return (
        <label
            htmlFor={props.labelFor}
        >{props.labelName}</label>
    );
}