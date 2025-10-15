import { useEffect, useState } from "react";
import { ContainerProducts,Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList,ImagenSpinner, ContainerSpinner } from './Products.style';
import productsResults from "../../state/prodcuts-result-js.js";
import Card from "../../components/Cards/Card";
import Spinner from '../../assets/icons/loader.svg'
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
    {isLoading &&
    <ContainerSpinner>
      <ImagenSpinner src={Spinner} alt ='cargando...'></ImagenSpinner>
      <p>Cargando elementos</p>
    </ContainerSpinner>
    }
    {!isLoading &&
    <ContainerProducts>
    {products?.map((item) => {
      return(  
       <Card key={item.id} item={item}></Card>
      )
    })
    }
    </ContainerProducts>
}
    </ContainerSectionProducts>
 )   
}
export default Products  