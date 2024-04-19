import './styles.scss'

interface InputIconProps {
    placeholder: string;
    id: string;
    type: string;
    label: string;
    value: string | number;
    onChange: (e: any) => void;
}


const InputText = (props: InputIconProps) => {
    const handleInputChange = (e: any) => {
        props.onChange(e.target.value);
    }



    return(
        <div id="input-text">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.type} 
                name={props.id} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={handleInputChange}
            />
        </div>
    )
}

export default InputText;