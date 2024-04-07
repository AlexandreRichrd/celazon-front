import './styles.scss'

interface ISecondaryButtonProps {
    children: string;
    event: () => void;
}

const SecondaryButton = (props: ISecondaryButtonProps) => {
    return (
        <button className="secondary-btn" onClick={props.event}>
            {props.children}
        </button>
    )
}

export default SecondaryButton;