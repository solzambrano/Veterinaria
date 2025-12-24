import Categories from "../../../../public/data/data-category";
import {ContainerCategory,Category,ImageCategory,TitleCategory}from './cardCategory.style'
const CardCategory = () => {
   console.log(Categories);
   
return(
    <ContainerCategory>
{Categories.map(categorie => {
   return  <Category>
        <ImageCategory src={categorie.image}></ImageCategory>
        <TitleCategory>{categorie.title}</TitleCategory>
    </Category>
})}
    </ContainerCategory>
)
};export default CardCategory