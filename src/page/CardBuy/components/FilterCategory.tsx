import { useState } from "react"

function FilterCategory({ dataCategory, method }: { dataCategory: { nameCategory: string, selected: boolean }[], method: (dataPrice: any[]) => void; }) {

    const [data, setData] = useState<{ nameCategory: string, selected: boolean }[]>(dataCategory)

    const filter = (nameCategory: string) => {

        const category = [...data].map(a => {
            if (a.nameCategory === nameCategory) {
                a.selected = !a.selected;
            }
            return a;
        });

        debugger

        setData(category);

        method(category);
    }

    return (

        <div>
            {
                data.map(e => (
                    <div key={e.nameCategory} className="flex flex-row items-center gap-2">
                        <input type="checkbox" name={e.nameCategory} id={e.nameCategory} onChange={() => filter(e.nameCategory)} checked={e.selected} />
                        <label className="capitalize" htmlFor={e.nameCategory}>{e.nameCategory}</label>
                    </div>
                ))
            }

        </div>
    )
}

export default FilterCategory