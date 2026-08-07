import {ButtonStyle,Icon} from './button.style'
const Button = ({text, variant,icon}) => {
return(
    <ButtonStyle variant= {variant}>
        <Icon src={icon} alt="telefono" />
        {text}
    </ButtonStyle>
)

}
export default Button