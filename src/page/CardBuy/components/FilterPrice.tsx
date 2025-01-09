import { useState } from "react"

interface IGetPrice {
    namePrice: string,
    selected: boolean
}

function FilterCategory({ dataPrice, method }: { dataPrice: IGetPrice[], method: (dataPrice: any[]) => void; }) {

    const [data, setData] = useState<{ namePrice: string, selected: boolean }[]>(dataPrice)

    const filter = (namePrice: string) => {

        const price = [...data].map(a => {
            if (a.namePrice === namePrice) {
                a.selected = !a.selected;
            }
            return a;
        });

        setData(price);

        method(price);
    }

    return (

        <div>
            {
                data.map(e => (
                    <div key={e.namePrice} className="flex flex-row items-center gap-2">
                        <input type="checkbox" name={e.namePrice} id={e.namePrice} onChange={() => filter(e.namePrice)} checked={e.selected} />
                        <label className="capitalize" htmlFor={e.namePrice}>{e.namePrice}</label>
                    </div>
                ))
            }

        </div>
    )
}

export default FilterCategory