 import {ContainerCard,ContainerImage,Imagen,
    ContainerDescription,Title,Paragraph} from './Card.style'
 const Card = ({item}) => {
    
    return(
        <ContainerCard>
            <ContainerImage>
                <Imagen src={item.imagen}></Imagen>
            </ContainerImage>
            <Title>{`$${item.precio}`}</Title>
            <ContainerDescription>
                <Title>{item.nombre} </Title>
                <Paragraph>{item.descripcion}</Paragraph>
            </ContainerDescription>
        </ContainerCard>

    )
 }
 export default Card