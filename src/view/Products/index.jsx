import { useEffect, useState } from "react";
import { ContainerProducts,ContainerList } from './Products.style';
import productsResults from "../../state/prodcuts-result-js";
import Card from "../../components/Cards/Card";
const Products = () => {
   const {products, isLoading, error ,getProducts} = productsResults()

  useEffect(() => {
    getProducts();
  }, []);
 return(
    <>
    <h1>Tienda de productos</h1>
    <ContainerList>
      <li>Alimento</li>
      <li>Juguetes</li>
      <li>Ropa</li>
      <li>Camas</li>
      <li>Limpieza</li>

    </ContainerList>
    <p>aqyi va isloading</p>
    <ContainerProducts>
    {products?.map((item) => {
      return(  
       <Card key={item.id} item={item}></Card>
      )
    })}
    </ContainerProducts>
    </>
 )   
}
export default Products  