import { useEffect, useState } from "react";
import useFetchProducts from '../../hooks/useFetchProducts';
import { ContainerImage } from './Products.style';

const Products = () => {
 const {data,getProducts}= useFetchProducts()
const numberItems = data?.map((item)=>{
   return <li key={item.id}>{item.name}</li>
})
  useEffect(() => {
    getProducts();
  }, []);
 return(
    <>
    <h1>lista de productos </h1>
    <ContainerImage>
    <ul>{numberItems}</ul>
    </ContainerImage>
    </>
 )   
}
export default Products  