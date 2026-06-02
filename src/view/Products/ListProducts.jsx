import { useEffect, useState } from "react";
import { ContainerProducts} from './ListProducts.style.js';
import Loader from "../../components/Spinner/index.jsx";
import productsResults from "../../state/prodcuts-result-js.js";
import Card from "../../components/Cards/Card";


export const ListProducts = ({filter}) =>{
       const {products, isLoading, error ,getProducts} = productsResults()
    
      useEffect(() => {  
    getProducts();
  }, []);

    const filterProducts = 
    filter === "Todos" 
    ? products
    : products.filter(product => product.slug === filter)
    
    return (
        <>

    {isLoading ?
         (<Loader/>)
         :
         (
         <ContainerProducts>
            {filterProducts?.map((item) => {
              return(  <Card key={item.id} item={item}></Card>)
              })
            }
          </ContainerProducts>
        )
    }
        </>

    )
}