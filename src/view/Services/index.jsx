import Card from "../../components/Cards/Card"
import pet from '../../assets/icons/veterinaria.svg'
import quality from '../../assets/icons/quality.svg'
import Specialities from "../Home/specialties"
import atencion from '../../assets/images/atencion.png'

const Services = () => {
    return(
        <>
        <div>
            <div> 

        <h1>Cuidados integrales para tu <span>mascota </span></h1>
        <p>Ofrecemos servicios de salud de alta calidad con un enfoque humano y tecnologia de vanguardia</p>
        <ul>
        <li>
            <img src={quality}></img>
            <span>Calidad certificada</span>
        </li>
        <li>
            <img src={pet}></img>
            <span>Especialistas en Mascotas</span>
        </li>
        </ul>
            </div>
            <div>
                <img src={atencion} alt="doctores_atendiendo_mascota" />
            </div>
        </div>
        <h2>Nuestras Especialidades</h2>
        <Specialities/>
        </>
    )
}
export default Services