import {create} from 'zustand';
const productsResults = create ((set)=>({
    products:[],
    isLoading:false,
    error:{},

    getProducts : async () =>{
        try{
            set(()=>({ isLoading:true}))
            const response = await fetch('/data/products.json')
            const products= await response.json();
            set(()=>({products}))
            set(()=>({ isLoading:false}))    
        }
        catch(error){
            set(()=>({error}))
        }
    }

}))

export default productsResults