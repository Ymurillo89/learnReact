import { useEffect, useState } from "react";
import { IGetProduct } from "../interface/cardBuy";
import { getDataProduct } from "../service/cardBuyService";

export function useProduct() {

    const [dataProduct, setDataProduct] = useState<IGetProduct[]>([]);
    const [dataCategory, setDataCategory] = useState<{ nameCategory: string, selected: boolean }[]>([]);
    const [dataPrice, setDataPrice] = useState<{ namePrice: string, selected: boolean }[]>([]);

    const getProduct = async () => {
        const { dataProduct } = await getDataProduct()
        setDataProduct(dataProduct);
    }

    const getCategory = () => {
        const uniqueCategories = [...new Set(dataProduct.map(e => e.category))];
        const category = uniqueCategories.map(name => ({
            nameCategory: name,
            selected: false
        }));
        setDataCategory(category);
    }

    const getPrice = () => {

        const uniquePrice = [...new Set(dataProduct.map(e => e.price))];

        const price = uniquePrice.map(name => ({ 
            namePrice: name.toString(),
            selected: false }
        ))
        
        setDataPrice(price);
    }

    useEffect(() => {

        getProduct();
        getCategory();
        getPrice();

        console.log("dataProduct");
        
    }, [])

    const filter = (type: number, name: string, selected: boolean): void => {

        if (type === 1) {
            const category = dataProduct.filter(e =>e.category === name);
            setDataProduct(category);
        }

        if (type === 2) {
            const price = dataProduct.filter(e => e.title=== name);
            setDataProduct(price);
        }
    }

    return { dataProduct, dataCategory, dataPrice,filter }

}