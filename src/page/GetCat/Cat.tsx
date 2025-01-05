import { useEffect, useState } from "react";
import { getDataEcho } from "../../service/catService";
import { useCatImage } from "../../customHook/catImage";

//Custom Hook
function Cat() {

  const [catFact, setCatFact] = useState<string>("");
  
  const imageCat = useCatImage({catFact});
  
  const getEcho = async() => {
    const data = await getDataEcho();    
    setCatFact(data);    
  }

  useEffect(() => {   
    getEcho();
  }, []);
  

  return (
    <div>
      <h1>{catFact}</h1>
      <img src={imageCat} alt="Gatitos" height={300} width={300}/>

      <button className="bg-red-500 rounded p-4 border text-white" onClick={getEcho} >Reload</button>
    </div>
  );

}

export default Cat;
