import '../style/field.css';
import TextError from './TextError';

const Field = (props) => {
  return (
    <label htmlFor={props.name} className="field">
        <h3>{props.label}</h3>
        <input 
            type={props.type}
            id={props.name}  
            name={props.name}
            {...props.register(props.name)}
        />
        {props?.error && props.error.message ?
        <TextError error={props.error.message} /> 
        :null}
    </label>
  )
}

export default Field
