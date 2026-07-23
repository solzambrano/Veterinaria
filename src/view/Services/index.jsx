import { ContainerService,Information,ImagenMascota,ContainerImage,Imagen,ContainerList,List,Icon,SpanGreen,Title,Paragraph,Span } from './services.style'
import pet from '../../assets/icons/veterinaria.svg'
import quality from '../../assets/icons/quality.svg'
import Specialities from "../Home/specialties"
import atencion from '../../assets/images/atencion.png'
import mascota from '../../assets/images/gatito.png'

const Services = () => {
    return(
        <>
        <ContainerService>
            <Information> 
                <Title>Cuidados integrales para tu <SpanGreen>mascota </SpanGreen></Title>
                <Paragraph>Ofrecemos servicios de salud de alta calidad con un enfoque humano y tecnologia de vanguardia.
                     Protegemos su bienestar desde que nace hasta su etapa adulta. Cuidamos todos los detalles para que tu compañero tenga una vida larga, sana y muy feliz.
                </Paragraph>
                <ContainerList>
                    <List>
                        <Icon src={quality}/>
                        <Span>Calidad certificada</Span>
                    </List>
                    <List>
                        <Icon src={pet}/>
                        <Span>Especialistas en Mascotas</Span>
                    </List>
                </ContainerList>
            </Information>
            <ContainerImage>
                <Imagen src={atencion} alt="doctores_atendiendo_mascota" />
                <ImagenMascota src={mascota} alt="imagen_de_gato" />
            </ContainerImage>
        </ContainerService>
        <Specialities/>
        </>
    )
}
export default Services