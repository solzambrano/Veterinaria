import Spinner from '../../assets/icons/loader.svg'
import { ImagenSpinner,ContainerSpinner } from './spinner.style'
const Loader = () => {
return(
    <>
    <ContainerSpinner>
<ImagenSpinner src={Spinner} alt ='cargando...'></ImagenSpinner>
    </ContainerSpinner>
    </>
)
}
export default Loader