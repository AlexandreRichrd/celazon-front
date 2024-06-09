import './styles.scss'

interface TerciaryButtonProps {
    text: string;
    CTA: () => void;
}

const TerciaryButton = ({text, CTA}: TerciaryButtonProps) => {
    return (
        <button id="terciary-btn" onClick={CTA}>
            <span>
                {text}
            </span>
        </button>
    )
}

export default TerciaryButton;