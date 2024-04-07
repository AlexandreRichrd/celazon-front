import './styles.scss'

interface InputIconProps {
    icon?: string;
    placeholder: string;
    id: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: any) => void;
}

const InputIcon = (props: InputIconProps) => {

    const handleInputChange = (e: any) => {
        props.onChange(e.target.value);
    }

    const inputStyle = props.icon ? { backgroundImage: `url(${props.icon})` } : {};


    return(
        <div id="input-icon">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.type} 
                name={props.id} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={handleInputChange} 
                className={props.icon ? 'icon' : ''}
                style={inputStyle}
            />
        </div>
    )
}

export default InputIcon;