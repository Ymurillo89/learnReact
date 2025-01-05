import { useEffect, useState } from "react";
import { IGetProduct } from "../interface/cardBuy";
import { getDataProduct } from "../service/cardBuyService";

export function useProduct() {

    const [dataProduct, setDataProduct] = useState<IGetProduct[]>([]);
    const [dataCategory, setDataCategory] = useState<string[]>([]);
    const [dataPrice, setDataPrice] = useState<number[]>([]);

    const getProduct = async () => {
        const {dataProduct} =await getDataProduct()       
        setDataProduct(dataProduct);
    }

    const getCategory = () => {
        const category = dataProduct.map((e)=>e.category)
        setDataCategory(category);
    }

    const getPrice = () => {
        const  price = dataProduct.map((e)=>e.price)
        setDataPrice(price);
    }

    useEffect(()=>{
        
        getProduct();
        getCategory();
        getPrice();

    },[dataProduct])

    return {dataProduct,dataCategory,dataPrice}
 
}