export default function Form(props){
    return(
        <form
            name={props.formName}
            className={props.formClass}
        >
            {props.children}
        </form>
    );
}