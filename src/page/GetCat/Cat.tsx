import { useCatImage, useEcho } from "../../customHook/catImage";


function Cat() {

  const {catFact,dataFact} = useEcho();
  
  const imageCat = useCatImage({catFact});

  return (
    <div>
      <h1>{catFact}</h1>
      <img src={imageCat} alt="Gatitos" height={300} width={300}/>
      <button className="bg-red-500 rounded px-4 py-2 border text-white" onClick={dataFact} >Reload</button>
    </div>
  );

}

export default Cat;
