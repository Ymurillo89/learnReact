import { useEffect, useState } from "react"


function FollowMouse() {

    const [enable,setEnabled] = useState<boolean>(false)
    const [position,setPosition] = useState<{x:number,y:number}>({x: 0, y: 0})

    useEffect(()=>{
        
        console.log("Si");
        
        const handleMouse =(event:any) => {
                 
            const {clientX,clientY}=event;

            console.log({clientX,clientY});
            
            setPosition({x:clientX, y:clientY})
        }

        if(enable){
            window.addEventListener("pointermove",handleMouse)
        }
        
        return ()=>{
            window.removeEventListener("pointermove",handleMouse)
        }
        
    },[position,enable])

    return (
        <div className="mx-auto container flex flex-col items-center justify-center">

            <div style={
                {position:"absolute",
                backgroundColor:"#09f",
                borderRadius:"50%",
                opacity:0.8,
                pointerEvents:"none",
                left:-20,
                top:-20,
                width:40,
                height:40,                
                transform:`translate(${position.x}px,${position.y}px)`
                }
                }>

            </div>

            <button onClick={()=>{setEnabled(!enable)}} className="border rounded py-2 px-6 bg-black border-red-500">{enable? 'Desactivar' :'Activar'}</button>

        </div>
    )
}

export default FollowMouse