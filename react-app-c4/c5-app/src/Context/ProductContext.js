import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let ProductContext=createContext();

export default function ProductContextProvider(props){

    let [products,SetProduct]=useState([])

    async function getproducts(){
        let {data}= await axios.get('https://fakestoreapi.com/products');
        SetProduct(data)
        console.log(products);
        
  
    }
    useEffect(() => {
   
    getproducts()
    
    }, [])

    return <ProductContext.Provider value={{products,getproducts}}>
            {props.children}
    </ProductContext.Provider>
}
