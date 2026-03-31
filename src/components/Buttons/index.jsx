import {ButtonStyle} from './button.style'
const Button = ({text, variant}) => {
return(
    <ButtonStyle variant= {variant}>
        {text}
    </ButtonStyle>
)

}
export default Button