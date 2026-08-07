import Button from "../../../../components/Buttons";
const HeaderServices = ({serviceData}) => {
    const{title,icon,background,subtitle,image}=serviceData.sectionImage;
    console.log(serviceData.spanSuperior);
    
return(
    <header>
        <article>
            <span>{serviceData.spanSuperior}</span>
            <h1>{serviceData.title}</h1>
            <p>{serviceData.subtitle}</p>
            <div>
                <Button text={serviceData.phoneNumber} variant ={serviceData.color} icon={serviceData.icon}/>
               <Button text={serviceData.text} variant ={" "} icon={""}/>
            </div>

        </article>
        <article>
            <div><img src={image} alt="" /></div>
            <div>
                <p>{title}</p>
                <img src={icon} alt="" />
            <p>{subtitle}</p>
            </div>

        </article>
    </header>
)

}
export default HeaderServices