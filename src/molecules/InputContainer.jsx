import { InputLabel, TextInput } from '../atoms';

export default function InputContainer(props) {
    return(
        <div className="input-container">
            <TextInput
                name={props.inputName}
                value={props.value}
                inputAction={props.inputAction}
                inputClass={props.inputClass}
            />
            <InputLabel
                labelName={props.labelName}
                labelFor={props.inputName}
            />
        </div>
    )
}