import './styles.scss'
import arrow from '@assets/images/icon/arrow.svg'

interface IScrollBtnProps {
    side: string,
    isDisabled: boolean,
    CTA: () => void
}

const ScrollBtn = ({side, isDisabled, CTA}: IScrollBtnProps) => {
    return (
        <button onClick={CTA} id='scroll-btn' className={(isDisabled ? ' disabled' : '')}>
            <img src={arrow} alt={side} className={side} />
        </button>
    )
}

export default ScrollBtn