 import {ContainerCard,ContainerImage,Imagen,
    ContainerDescription,Title,Paragraph} from './Card.style'
 const Card = ({item,isServices}) => {
console.log('legue',item);
    
    return(
        <ContainerCard>
            <ContainerImage isServices={isServices}>
                <Imagen src={item.image} isServices={isServices}></Imagen>
            </ContainerImage >
            { item.price &&
                <Title>{`$${item.price}`}</Title>
            }
            <ContainerDescription isServices={isServices}>
                <Title>{item.title} </Title>
                <Paragraph>{item.description}</Paragraph>
            </ContainerDescription>
        </ContainerCard>

    )
 }
 export default Card