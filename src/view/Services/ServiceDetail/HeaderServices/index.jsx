import Button from "../../../../components/Buttons";
import { Header,ArticleText,SpanAvailable } from "./header.style";
const HeaderServices = ({serviceData}) => {
    const{title,icon,background,subtitle,image}=serviceData.sectionImage;
    console.log(title,serviceData.sectionImage);
    
return(
    <Header>
        <ArticleText>
            <Button text={serviceData.span} variant="pink" icon={serviceData.iconEmergency}></Button>
            <SpanAvailable>{serviceData.span}</SpanAvailable>
            <h1>{serviceData.title}</h1>
            <p>{serviceData.subtitle}</p>
            <div>
                <Button text={serviceData.phoneNumber} variant ="red" icon={serviceData.iconPhone}/>
               <Button text={serviceData.text} variant ={" "} icon={""}/>
            </div>

        </ArticleText>
        <article>
            <div><img src={image} alt="" /></div>
            <div>
                <p>{title}</p>
                <img src={icon} alt="" />
            <p>{subtitle}</p>
            </div>

        </article>
    </Header>
)

}
export default HeaderServices