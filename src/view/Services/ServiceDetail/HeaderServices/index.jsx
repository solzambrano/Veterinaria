import Button from "../../../../components/Buttons";
import {
  Header,
  SectionInfo,
  Title,
  Available,
  SectionImage,
  SpanTitle,
  Icon,
  ParagraphDescription,
  Subtitle,
  ExtraInfo,
  LinkRight,
  LinkLeft,
  ImageContainer,
  Image,
  Paragraph,
  ContainerLinks,
} from "./header.style";
const HeaderServices = ({ serviceData }) => {
  const {
    title,
    icon,
    filter: FilterImage,
    subtitle,
    image,
    width,
    height,
  } = serviceData.sectionImage;
  const { iconSpan, span, theme, filter: FilterInfo } = serviceData.infoSup;
  const { titleHeader, description, textSecondaryLink } = serviceData;
  const { text, iconPrimary, filter: FilterPrimary } = serviceData.primaryLink;
  console.log(theme);

  return (
    <Header>
      <SectionInfo>
        <Available $variant={theme}>
          {iconSpan && <Icon $filter={FilterInfo} src={iconSpan} />}
          {span}
        </Available>
        <Title>
          {titleHeader.map((text, index) => (
            <SpanTitle key={index} $color={text.color}>
              {text.text}
            </SpanTitle>
          ))}
        </Title>
        <ParagraphDescription>{description}</ParagraphDescription>
        <ContainerLinks>
          <LinkRight>
            {iconPrimary && <Icon src={iconPrimary} $filter={FilterPrimary} />}
            {text}
          </LinkRight>
          <LinkLeft>{textSecondaryLink}</LinkLeft>
        </ContainerLinks>
      </SectionInfo>
      <SectionImage>
        <ImageContainer>
          <Image
            width={width}
            height={height}
            src={image}
            alt="operacion mascota"
          />
        </ImageContainer>
        <ExtraInfo>
          <Subtitle>{title}</Subtitle>
          <Icon $filter={FilterImage} src={icon} alt="" />
          <Paragraph>{subtitle}</Paragraph>
        </ExtraInfo>
      </SectionImage>
    </Header>
  );
};
export default HeaderServices;
