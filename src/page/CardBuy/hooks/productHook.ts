import { useEffect, useState } from "react";
import { IGetProduct } from "../interface/cardBuy";
import { getDataProduct } from "../service/cardBuyService";

export function useProduct() {
    const [dataProduct, setDataProduct] = useState<IGetProduct[]>([]);
    const [originalDataProduct, setOriginalDataProduct] = useState<IGetProduct[]>([]);
    const [dataCategory, setDataCategory] = useState<{ nameCategory: string; selected: boolean }[]>([]);
    const [dataPrice, setDataPrice] = useState<{ namePrice: string; selected: boolean }[]>([]);

    const getProduct = async () => {
        const { dataProduct } = await getDataProduct();
        setDataProduct(dataProduct);
        setOriginalDataProduct(dataProduct);

        updateCategoryAndPrice(dataProduct);
    };

    const updateCategoryAndPrice = (products: IGetProduct[]) => {

        const uniqueCategories = [...new Set(products.map((e) => e.category))];
        const category = uniqueCategories.map((name) => ({
            nameCategory: name,
            selected: false,
        }));
        
        setDataCategory(category);         

        const uniquePrices = [...new Set(products.map((e) => e.price))];
        const price = uniquePrices.map((name) => ({
            namePrice: name.toString(),
            selected: false,
        }));

        setDataPrice(price);      
        
    };

    useEffect(() => {
        getProduct();
    }, []);

    const filter = () => {
        debugger
        const selectedCategory = dataCategory.filter((e) => e.selected).map((y) => y.nameCategory);
        const selectedPrice = dataPrice.filter((e) => e.selected).map((y) => y.namePrice);

        const filtered = originalDataProduct.filter(
            (obj) =>
                (!selectedCategory.length || selectedCategory.includes(obj.category)) &&
                (!selectedPrice.length || selectedPrice.includes(obj.price.toString()))
        );

        setDataProduct(filtered);
    };

    return { dataProduct, dataCategory, dataPrice, filter, setDataCategory, setDataPrice };
}