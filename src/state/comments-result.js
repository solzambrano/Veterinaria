import {create} from 'zustand';

const commentsResult = create ((set)=>({
    comments:[],
    isLoading:true,
    error:{},
    getComments: async () => {
        try{
            set(()=>({ isLoading:true}))
            const response = await fetch('/data/comments.json');
            const comments =await response.json();
            set(()=>({comments}))
            set(()=>({ isLoading:false}))  
        }
        catch(error){
            set(()=>{error})
        }
    }
}))

export default commentsResult;