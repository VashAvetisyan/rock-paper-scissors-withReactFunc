import './Button.scss'

const Button = ({
    Icon,
    className,
    onClick,
    transform
}) => {
    return(
        <div className={`app-button ${className}`} onClick={onClick} style={{transform:transform}}>
            <div className='app-button__icon-container'>
              <Icon />
            </div>
        </div>
    )
}   

export default Button