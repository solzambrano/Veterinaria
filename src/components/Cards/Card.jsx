import {
  ContainerCard,
  ContainerImage,
  Imagen,
  Arrow,
  ContainerDescription,
  Title,
  Paragraph,
  ContainerInfo,
  ParagraphMas,
} from "./Card.style";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow-right.svg";

const Card = ({ item, isServices }) => {
  return (
    <ContainerCard>
      <ContainerImage $isServices={isServices} $variant={item.slug}>
        <Imagen src={item.image} $isServices={isServices} />
      </ContainerImage>
      {item.price && <Title>{`$${item.price}`}</Title>}
      <ContainerDescription $isServices={isServices}>
        <Title>{item.title} </Title>
        <Paragraph>{item.description}</Paragraph>
      </ContainerDescription>
      {isServices && (
        <ContainerInfo>
          <Link to={`/services/${item.slug}`}>
            {" "}
            <ParagraphMas>Saber más</ParagraphMas>{" "}
          </Link>
          <Arrow src={arrow} $isServices={isServices} />
        </ContainerInfo>
      )}
    </ContainerCard>
  );
};
export default Card;
