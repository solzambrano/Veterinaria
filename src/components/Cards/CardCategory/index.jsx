import Categories from "../../../../public/data/data-category";
import {ContainerCategory,Category,ImageCategory,TitleCategory}from './cardCategory.style'
const CardCategory = () => {
   console.log(Categories);
   
   const selectedQuestion = (categorie) => {
console.log(categorie);

   }
return(
    <ContainerCategory>
{Categories.map(categorie => {
   return  <Category  key={categorie.id}
             onClick={() => selectedQuestion(categorie.slug)}>
                <ImageCategory src={categorie.image}></ImageCategory>
                <TitleCategory>{categorie.title}</TitleCategory>
            </Category>
})}
    </ContainerCategory>
)
};export default CardCategory