 import {ContainerCard,ContainerImage,Imagen,Arrow,
    ContainerDescription,Title,Paragraph,ContainerInfo,ParagraphMas} from './Card.style'
import arrow from '../../assets/icons/arrow-right.svg'

 const Card = ({item,isServices}) => {
    return(
        <ContainerCard>
            <ContainerImage $isServices={isServices} 
             $color={item.color}
             $hover={item.hover}>
                <Imagen src={item.image} 
                $isServices={isServices}
               />
            </ContainerImage >
            { item.price &&
                <Title>{`$${item.price}`}</Title>
            }
            <ContainerDescription $isServices={isServices}>
                <Title>{item.title} </Title>
                <Paragraph>{item.description}</Paragraph>
            </ContainerDescription>
            {isServices &&
                 <ContainerInfo>
                    <ParagraphMas>Saber más</ParagraphMas>
                    <Arrow src={arrow} $isServices={isServices}></Arrow>
                </ContainerInfo>
            }
        </ContainerCard>

    )
 }
 export default Card