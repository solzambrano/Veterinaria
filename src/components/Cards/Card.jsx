 import {ContainerCard,ContainerImage,Imagen,
    ContainerDescription,Title,Paragraph} from './Card.style'
 const Card = ({item}) => {
    
    return(
        <ContainerCard>
            <ContainerImage>
                <Imagen src={item.image}></Imagen>
            </ContainerImage>
            <Title>{`$${item.price}`}</Title>
            <ContainerDescription>
                <Title>{item.title} </Title>
                <Paragraph>{item.description}</Paragraph>
            </ContainerDescription>
        </ContainerCard>

    )
 }
 export default Card