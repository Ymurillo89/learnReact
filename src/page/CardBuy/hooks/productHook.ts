import { useEffect, useState } from "react";
import { IGetProduct } from "../interface/cardBuy";

export function useProduct() {

    const [dataProduct, setDataProduct] = useState<IGetProduct[]>(product.product);
    const [dataCategory, setDataCategory] = useState<string[]>([]);
    const [dataPrice, setDataPrice] = useState<number[]>([]);

    

    useEffect(()=>{

        let category = dataProduct.map((e)=>e.category)
        setDataCategory(category);

        let price = dataProduct.map((e)=>e.price)
        setDataPrice(price);

    },[dataProduct])
       



    return {dataProduct,dataCategory,dataPrice}


 
}