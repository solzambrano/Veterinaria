import { useEffect } from "react";
import Loader from "../../components/Spinner/index.jsx";
import { ContainerProducts,Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList} from './Products.style';
import productsResults from "../../state/prodcuts-result-js.js";
import Card from "../../components/Cards/Card";
const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()
  useEffect(() => {
    getProducts();
  }, []);
 return(
    <ContainerSectionProducts>
    <TitleProducts>Tienda de productos</TitleProducts>
    <ContainerList>
      <Lista>Alimento</Lista>
      <Lista>Juguetes</Lista>
      <Lista>Ropa</Lista>
      <Lista>Camas</Lista>
      <Lista>Limpieza</Lista>
    </ContainerList>
    {isLoading ?
         (<Loader/>)
         :
         (
         <ContainerProducts>
            {products?.map((item) => {
              return(  <Card key={item.id} item={item}></Card>)
              })
            }
          </ContainerProducts>
        )
    }
    </ContainerSectionProducts>
 )   
}
export default Products  