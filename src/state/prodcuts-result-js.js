import {create} from 'zustand';
const productsResults = create ((set)=>({
    products:[],
    isLoading:true,
    error:{},
    currentPage:1,
    itemsPerPage:8,

    getProducts : async () =>{
         setTimeout(async () => {
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
         }, 3000);
    },
    getCurrentItems: () => {
        const { products, currentPage, itemsPerPage } = get()
        const start = (currentPage - 1) * itemsPerPage
        const end = start + itemsPerPage
        return products.slice(start, end)
},
    getTotalPages:()=>{
        const { products, itemsPerPage } = get()
        return Math.ceil(products.length / itemsPerPage)
    },
    goToPage: (page) => {
        const totalPages = get().getTotalPages()
        if (page < 1 || page > totalPages) {
            return    
        }
        set({ currentPage: page })
    },

    nextPage: () => {
        const { currentPage, getTotalPages } = get()
        if (currentPage < getTotalPages()) {
            set({ currentPage: currentPage + 1 })
        }
    },
    prevPage: () => {
    const { currentPage } = get()
    if (currentPage > 1) {
        set({ currentPage: currentPage - 1 })
    }
  },
    setPage :(page)=> {
        set({currentPage:page})
    }

}))

export default productsResults