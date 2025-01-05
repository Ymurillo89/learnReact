import { IGetProduct } from "../interface/cardBuy";

export async function getDataProduct():Promise<{dataProduct:IGetProduct[]}> {

    let response = await fetch("https://fakestoreapi.com/products");
    let dataProduct:IGetProduct[] = await response.json();   
    
    return {dataProduct};
    //let response = data.res
}