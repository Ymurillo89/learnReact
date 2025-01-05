import { useProduct } from "./hooks/productHook"

function CardBuy() {

    const {dataProduct,dataCategory,dataPrice} = useProduct();

    return (

        <div className="grid grid-cols-3 gap-4">

            
            {
                dataProduct.map((e)=>(
                    <p>{e.category}</p>
                ))
            }            

            {
                dataCategory.map((e)=>(
                    <p>{e}</p>
                ))
            }
            

            {
                dataPrice.map((e)=>(
                    <p>{e}</p>
                ))
            }
        </div>


    )
}

export default CardBuy