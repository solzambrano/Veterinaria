import { useEffect, useState } from "react";
import {Lista, 
  ContainerSectionProducts, TitleProducts, ContainerList} from './Products.style';
import { ListProducts } from "./ListProducts.jsx";
import Paginator from '../../components/Paginator'
import productsStore from "../../state/useProductStore.js";

const Products = () => {
  const [filter, setFilter] = useState("Todos");
  const { goToPage } = productsStore()
  const handleFilter = (value) => {
    goToPage(1)
    setFilter(value);
  };

 return(
    <ContainerSectionProducts>
      <TitleProducts>Tienda de productos</TitleProducts>
      <ContainerList >
        <Lista onClick={()=>handleFilter("Alimento")}>Alimento</Lista>
        <Lista  onClick={()=>handleFilter("Juguetes")}>Juguetes</Lista>
        <Lista onClick={()=>handleFilter("Ropa")}>Ropa</Lista>
        <Lista  onClick={()=>handleFilter("Camas")}>Camas</Lista>
        <Lista  onClick={()=>handleFilter("Limpieza")}>Limpieza</Lista>
        <Lista  onClick={()=>handleFilter("Accesorios")}>Accesorios</Lista>
        <Lista  onClick={()=>handleFilter("Todos")}>Todos</Lista>
      </ContainerList>
      <ListProducts filter={filter}/>
      <Paginator></Paginator>
    </ContainerSectionProducts>
 )   
}
export default Products  