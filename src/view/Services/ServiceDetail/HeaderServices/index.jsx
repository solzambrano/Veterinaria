import Button from "../../../../components/Buttons";
import {
  Header,
  SectionInfo,
  Title,
  Available,
  SectionImage,
  SpanTitle,
  IconAvailable,
} from "./header.style";
const HeaderServices = ({ serviceData }) => {
  const { title, icon, background, subtitle, image } = serviceData.sectionImage;
  console.log(title, serviceData);

  return (
    <Header>
      <SectionInfo>
        <Available>
          <IconAvailable
            $filter={serviceData.filterIcon}
            src={serviceData.iconEmergency}
          />
          {serviceData.span}
        </Available>
        <Title>
          {/* <p>{serviceData.title}</p> */}
          {serviceData.title.map((text, index) => (
            <SpanTitle key={index} $color={text.color}>
              {text.text}
            </SpanTitle>
          ))}
        </Title>
        <p>{serviceData.subtitle}</p>
        <div>
          <Button
            text={serviceData.phoneNumber}
            variant="red"
            icon={serviceData.iconPhone}
          />
          <div text={serviceData.text} variant={" "} icon={""} />
        </div>
      </SectionInfo>
      <SectionImage>
        <div>
          <img src={image} alt="operacion mascota" />
        </div>
        <div>
          <p>{title}</p>
          <img src={icon} alt="" />
          <p>{subtitle}</p>
        </div>
      </SectionImage>
    </Header>
  );
};
export default HeaderServices;
