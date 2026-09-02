import {
  Header,
  SectionInfo,
  Heading,
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
    theme: themeImage,
  } = serviceData.sectionImage;
  const { iconSpan, span, theme, filter: FilterInfo } = serviceData.infoSup;
  const { titleHeader, description } = serviceData;
  const {
    textPrimary,
    iconPrimary,
    filter: FilterPrimary,
    theme: themePrimary,
  } = serviceData.primaryLink;
  const { textSecondary, theme: themeSecondary } = serviceData.secondaryLink;
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
          <LinkRight $variant={themePrimary}>
            {iconPrimary && (
              <Icon
                $variant={themePrimary}
                src={iconPrimary}
                $filter={FilterPrimary}
              />
            )}
            {textPrimary}
          </LinkRight>
          {textSecondary && (
            <LinkLeft $variant={themeSecondary}>{textSecondary}</LinkLeft>
          )}
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
        <ExtraInfo $variant={themeImage}>
          <Heading>
            <Icon $filter={FilterImage} src={icon} alt="" />
            <Subtitle>{title}</Subtitle>
          </Heading>
          <Paragraph>{subtitle}</Paragraph>
        </ExtraInfo>
      </SectionImage>
    </Header>
  );
};
export default HeaderServices;
