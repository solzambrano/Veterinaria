import {
  Header,
  SectionInfo,
  Heading,
  Title,
  Span,
  SpanContent,
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
    image,
    width,
    height,
    variant: variantImage,
  } = serviceData.sectionImage;
  const {
    title,
    icon,
    filter: filterImage,
    subtitle,
    variant: variantAdditional,
  } = serviceData.additional;
  const { iconSpan, span, variant, filter: filterInfo } = serviceData.infoSup;
  const { titleHeader, description } = serviceData.content;
  const {
    textPrimary,
    iconPrimary,
    filter: filterPrimary,
    variant: variantPrimary,
  } = serviceData.primaryLink;
  const { textSecondary, variant: variantSecondary } =
    serviceData.secondaryLink;
  return (
    <Header>
      <SectionInfo>
        <SpanContent $variant={variant}>
          {iconSpan && <Icon $filter={filterInfo} src={iconSpan} />}
          <Span $variant={variant}>{span} </Span>
        </SpanContent>
        <Title $variant={variant}>
          {titleHeader.map((text, index) => (
            <SpanTitle key={index} $color={text.color}>
              {text.text}
            </SpanTitle>
          ))}
        </Title>
        <ParagraphDescription>{description}</ParagraphDescription>
        <ContainerLinks>
          <LinkRight $variant={variantPrimary}>
            {iconPrimary && (
              <Icon
                $variant={variantPrimary}
                src={iconPrimary}
                $filter={filterPrimary}
              />
            )}
            {textPrimary}
          </LinkRight>
          {textSecondary && (
            <LinkLeft $variant={variantSecondary}>{textSecondary}</LinkLeft>
          )}
        </ContainerLinks>
      </SectionInfo>
      <SectionImage>
        <ImageContainer $variant={variantImage}>
          <Image
            width={width}
            height={height}
            src={image}
            alt="operacion mascota"
          />
        </ImageContainer>
        {title && (
          <ExtraInfo $variant={variantAdditional}>
            <Heading $variant={variantAdditional}>
              <Icon $filter={filterImage} src={icon} alt="" />
              <Subtitle>{title}</Subtitle>
            </Heading>
            <Paragraph>{subtitle}</Paragraph>
          </ExtraInfo>
        )}
      </SectionImage>
    </Header>
  );
};
export default HeaderServices;
