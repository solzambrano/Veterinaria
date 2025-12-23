import Categories from "../../../../public/data/data-category";
import {ContainerCategory,Category,ImageCategory,TitleCategory}from './cardCategory.style'
const CardCategory = () => {
   
return(
    <ContainerCategory>
{Categories.map(categorie => {
    <Category>
        <ImageCategory src={categorie.image}></ImageCategory>
        <TitleCategory>{categorie.title}</TitleCategory>
    </Category>
})}
    </ContainerCategory>
)
};export default CardCategory