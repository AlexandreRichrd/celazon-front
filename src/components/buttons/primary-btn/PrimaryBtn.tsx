import './styles.scss'

interface IPrimaryButtonProps {
    children: string;
    event: () => void;
}

const PrimaryButton = (props: IPrimaryButtonProps) => {
    return (
        <button className="primary-btn">
            {props.children}
        </button>
    )
}

export default PrimaryButton;