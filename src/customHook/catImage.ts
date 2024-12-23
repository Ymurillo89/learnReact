import { useEffect, useState } from "react";
import { getDataEcho } from "../service/catService";

export function useCatImage({ catFact }: { catFact: string }): string {
    const [imageCat, setImageCat] = useState<string>("");
  
    useEffect(() => {
      const threeWord = catFact.split(" ", 3).join(" ");
      fetch(`https://cataas.com/cat/says/${threeWord}`)
        .then((reponse) => {
          return reponse.blob();
        })
        .then((data) => {
          const imageUrl = URL.createObjectURL(data);
          setImageCat(imageUrl);
        });
    }, [catFact]);
  
    return imageCat;
  }

export const useEcho = async()=>
{
    const [catFact, setCatFact] = useState<string>("");

    const dataFact = async()=>{ 
        let data = await getDataEcho(); 
        setCatFact(data); 
    }    

    return {catFact,dataFact};

}