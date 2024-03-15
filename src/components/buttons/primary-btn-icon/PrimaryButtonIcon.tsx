import './styles.scss'

interface IPrimaryButtonIconProps {
    children: string;
    icon: string;
}

const PrimaryButtonIcon = (props: IPrimaryButtonIconProps) => {
    return (
        <button className="primary-btn-icon">
            {props.children}
            <div className="image">
                <img src={props.icon} alt="icon" className='img'/>
            </div>
        </button>
    )
}

export default PrimaryButtonIcon;