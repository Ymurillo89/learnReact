import { useProduct } from "./hooks/productHook"

function CardBuy() {
    
    const { dataProduct, dataCategory, dataPrice } = useProduct();
    
    return (
        
        <div >
            <h1 className="text-center font-bold text-2xl">Productos</h1>
            <div className="flex flex-row">
            <div className="w-1/4 bg-slate-900 p-4 rounded shadow">
                <h1 className="text-center font-bold text-2xl">Filtros</h1>
                <div>
                    <h2 className="text-lg font-semibold">Categorias</h2>
                    {
                        dataCategory.map((e) => (
                            <p>{e}</p>
                        ))
                    }
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Precio</h2>
                    {
                        dataPrice.map((e) => (
                            <p>{e}</p>
                        ))
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                {
                    dataProduct.map((e) => (
                        <div className="bg-slate-700 p-4 rounded shadow">
                            <div className="flex flex-row items-start justify-start gap-4">
                                <img className="size-20 rounded-md " src={e.image} alt={e.title} />
                                <div>
                                    <h2 className="text-lg font-semibold">{e.title}</h2>
                                    <p className="text-xs">{e.description}</p>

                                    <div className="flex flex-row items-center justify-between gap-4 mt-4">
                                        <p className="text-xs bg-slate-500 shadow p-1 rounded font-bold">$ {e.price}</p>
                                        <div>
                                            <p className="text-xs">Category</p>
                                            <p className="text-xs underline">{e.category}</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))
                }

                {
                    dataCategory.map((e) => (
                        <p>{e}</p>
                    ))
                }


                {
                    dataPrice.map((e) => (
                        <p>{e}</p>
                    ))
                }
            </div>
            </div>
            
        </div>


    )
}

export default CardBuy