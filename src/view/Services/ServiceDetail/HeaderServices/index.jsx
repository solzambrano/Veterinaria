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
  Paragraph,
} from "./header.style";
const HeaderServices = ({ serviceData }) => {
  const {
    title,
    icon,
    filter: FilterImage,
    subtitle,
    image,
  } = serviceData.sectionImage;
  const { iconSpan, span, filter: FilterInfo } = serviceData.infoSup;
  const { titleHeader, description, textSecondaryLink } = serviceData;
  const { text, iconPrimary, filter: FilterPrimary } = serviceData.primaryLink;
  console.log(title, FilterInfo);

  return (
    <Header>
      <SectionInfo>
        <Available>
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
        <LinkRight>
          {iconPrimary && <Icon src={iconPrimary} $filter={FilterPrimary} />}
          {text}
        </LinkRight>
        <LinkLeft>{textSecondaryLink}</LinkLeft>
      </SectionInfo>
      <SectionImage>
        <ImageContainer>
          <img src={image} alt="operacion mascota" />
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
