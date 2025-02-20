import styled from "./input.module.css"

function Input(props) {
    
    
    return (
        <div className={styled.createinput}>
            <label>{props.label}</label>
            <input name={props.name} onChange={props.handeleChange} type="type"></input>
        </div>

    )
}

export default Input