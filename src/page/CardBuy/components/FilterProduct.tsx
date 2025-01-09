import { useState } from "react"

export interface IFilterProduct {
  name: string;
  selected: boolean;
  type: number;
  updateFilter: (type:number,name:string,selected:boolean) => void;
}


export default function FilterProduct({data}:{data:IFilterProduct}) {

  const [select, setSelect] = useState<boolean>(data.selected)

  const changeInput = (type:number,value:string) => {    
    setSelect(!select)
    data.updateFilter(type,value,!select);    
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <input type="checkbox" name={data.name} id={data.name} onChange={()=>changeInput(data.type,data.name)} checked={select} />
      <label className="capitalize" htmlFor={data.name}>{data.name}</label>
    </div>

  )
}
