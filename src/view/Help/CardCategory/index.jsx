import Categories from "../../../../public/data/data-category";
import {ContainerCategory,Category,ImageCategory,TitleCategory}from './cardCategory.style'
              
const CardCategory = ({onSelectedCategory}) => {

return(
    <ContainerCategory>
{Categories.map(category => {
   return  <Category  key={category.id}
             onClick={() => onSelectedCategory(category.slug)}>
                <ImageCategory src={category.image}></ImageCategory>
                <TitleCategory>{category.title}</TitleCategory>
            </Category>
})}
    </ContainerCategory>
)
};export default CardCategory