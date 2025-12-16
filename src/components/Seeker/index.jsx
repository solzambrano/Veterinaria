import {ContainerSeeker, ButtonSeeker,SearchSeeker,InputSeeker} from './seeker.styles'
import Search from '../../assets/icons/search.svg'
const Seeker = () => {
    return(
<>
<ContainerSeeker>
<SearchSeeker src={Search}></SearchSeeker>
<InputSeeker placeholder="Buscar ejemplo: 'vacunas, citas, etc '"></InputSeeker>
<ButtonSeeker>Buscar</ButtonSeeker>
</ContainerSeeker>
</>
    )
}
export default Seeker