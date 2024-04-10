import './styles.scss'
import loupe from '@assets/images/icon/search.svg'

const SquareButton = () => {
    return (
        <button id="square-btn">
            <img src={loupe} alt="" />
        </button>
    )
}

export default SquareButton;