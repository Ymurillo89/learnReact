import FilterCategory from "./components/FilterCategory";
import FilterPrice from "./components/FilterPrice";
import { useProduct } from "./hooks/productHook"

function CardBuy() {

    const { dataProduct, dataCategory, dataPrice, filter, setDataCategory, setDataPrice } = useProduct();

    const filterCategory = (dataCategory: any[]): void => {
        setDataCategory(dataCategory);
        filter();
        console.log("Cate" + JSON.stringify(dataCategory));

    };

    const filterPrice = (dataPrice: any[]): void => {
        setDataPrice(dataPrice);
        filter();
        console.log("Price" + JSON.stringify(dataCategory));
    };


    return (

        <div className="container mx-auto p-4" >
            {/* <h1 className="text-center font-bold text-2xl">Productos</h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full">
                <div>
                    <h1 className="text-center font-bold text-2xl">Filtros</h1>
                    <div className="p-2 border rounded bg-slate-700">
                        <h2 className="text-lg font-semibold text-center">Categorías</h2>
                        {
                            dataCategory.length > 0 ?
                                <FilterCategory dataCategory={dataCategory} method={filterCategory} />
                                : <p>Load...</p>
                        }
                    </div>

                    <div className="p-2 border rounded bg-slate-700 mt-4">
                        <h2 className="text-lg font-semibold text-center">Precio</h2>
                        {
                            dataPrice.length > 0 ?
                                <FilterPrice dataPrice={dataPrice} method={filterPrice} />
                            :<p>Load...</p>
                        }
                    </div>
                </div>
                <div className="w-full lg:col-span-3">
                    {
                        dataProduct.length > 0 ?
                            dataProduct.map((e) => (
                                <div key={e.id} className="bg-slate-700 p-6 rounded shadow mt-4 border">
                                    <div className="flex flex-row items-start justify-start gap-4">
                                        <img className="size-20 rounded-md " src={e.image} alt={e.title} />
                                        <div>
                                            <h2 className="text-lg font-semibold">{e.title}</h2>
                                            <p className="text-xs w-full">{e.description}</p>

                                            <div className="flex flex-row items-center justify-between gap-4 mt-4">
                                                <p className="text-xs bg-slate-500 shadow p-1 rounded font-bold">$ {e.price}</p>
                                                <div className="flex flex-row items-center justify-between">
                                                    <p className="text-xs">Category</p>
                                                    <p className="text-xs underline">{e.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : <p>Cargando...</p>
                    }

                </div>
            </div>

        </div>


    )
}

export default CardBuy