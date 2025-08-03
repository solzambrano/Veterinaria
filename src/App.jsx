import Routes from './routes'
import { useEffect, useState } from "react";

import useFetchProducts from './hooks/useFetchProducts'

function App() {
  const {data,getProducts}= useFetchProducts()
console.log('data:', data);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
    <Routes></Routes>
    </>
  )
}

export default App
