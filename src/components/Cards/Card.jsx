 import {ContainerCard,ContainerImage,Imagen,
    ContainerDescription,Title,Paragraph,ContainerInfo,ParagraphMas} from './Card.style'
import arrow from '../../assets/icons/arrow-right.svg'

 const Card = ({item,isServices}) => {
    return(
        <ContainerCard>
            <ContainerImage $isServices={isServices}>
                <Imagen src={item.image} $isServices={isServices}></Imagen>
            </ContainerImage >
            { item.price &&
                <Title>{`$${item.price}`}</Title>
            }
            <ContainerDescription $isServices={isServices}>
                <Title>{item.title} </Title>
                <Paragraph>{item.description}</Paragraph>
            </ContainerDescription>
                 <ContainerInfo>
                    <ParagraphMas>Saber más</ParagraphMas>
                    <Imagen src={arrow} $isServices={isServices}></Imagen>
                    </ContainerInfo>
                        
        </ContainerCard>

    )
 }
 export default Card