import { useEffect, useState } from "react";
import { ContainerProducts} from './ListProducts.style.js';
import Loader from "../../components/Spinner/index.jsx";
import productStore from "../../state/useProductStore.js";
import Card from "../../components/Cards/Card";

export const ListProducts = ({filter}) =>{
      const {products,setTotalPages , isLoading, goToPage,error ,itemsPerPage,currentPage, getProducts} = productStore()
      useEffect(() => {  
        getProducts();
      }, []);
      useEffect(() => {
        setTotalPages(totalPages) 
        goToPage(1)    
      }, [filter]) 
      const filterProducts = 
      filter === "Todos" 
      ? products
      : products.filter(product => product.slug === filter)

      const totalPages = Math.ceil(filterProducts.length / itemsPerPage)
   
    const start = (currentPage - 1) * itemsPerPage
const end = start + itemsPerPage
const currentItems = filterProducts.slice(start, end)

    return (
        <>

    {isLoading ?
         (<Loader/>)
         :
         (
         <ContainerProducts>
            {currentItems?.map((item) => {
              return(  <Card key={item.id} item={item}></Card>)
              })
            }
          </ContainerProducts>
        )
    }
        </>

    )
}