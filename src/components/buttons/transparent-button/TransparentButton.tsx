import './styles.scss'

interface ITransparentButtonProps {
    children: string;
}

const TransparentButton = (props: ITransparentButtonProps) => {

    return (
        <button className="btn-transparent">
            {props.children}
        </button>
    );
}

export default TransparentButton;