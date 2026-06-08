import {create} from 'zustand';
const useProductsStore = create ((set,get)=>({
    products:[],
    isLoading:true,
    error:null,
    currentPage:1,
    itemsPerPage:10,
    totalPages:1,

    getProducts : async () =>{
        const { itemsPerPage } = get()
         setTimeout(async () => {
        try{
            set({ isLoading:true})
            const response = await fetch('/data/products.json')
            const products= await response.json();
            set({ products, 
                isLoading:false,
                totalPages: Math.ceil(products.length / itemsPerPage)
            })    
        }
        catch(error){
            set(()=>({error}))
        }
         }, 3000);
    },
    setTotalPages: (total) => set({ totalPages: total }),
    goToPage: (page) => {
    const { totalPages } = get()
        if (page < 1 || page > totalPages) return    
        set({ currentPage: page })
    },

    nextPage: () => {
    const { totalPages,currentPage } = get()
        if (currentPage < totalPages) set({ currentPage: currentPage + 1 })
    },
    prevPage: () => {
    const { currentPage } = get()
        if (currentPage > 1)  set({ currentPage: currentPage - 1 })
    },
    setPage :(page)=> set({currentPage:page})
    
}))

export default useProductsStore