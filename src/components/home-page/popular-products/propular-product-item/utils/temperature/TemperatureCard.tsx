import './styles.scss'

interface ITemperatureCardProps{
    temperature: string
    isactive?: boolean
}

const TemperatureCard = (props: ITemperatureCardProps) => {
    return(
        <div id='temperature-card' className={props.isactive ? '' : 'inactive'}>
            <span>{props.temperature}</span>
        </div>
    )
}

export default TemperatureCard