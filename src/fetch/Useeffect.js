import {useState} from 'react';
import {useEffect} from 'react';

function Useeffect()
{
    const[run,setRun]=useState(0);  //smjhna hai why in begin it rendered two times 
    const[go,setGo]=useState(0);
    const[fast,setFast]=useState(0);
    const[slow,setSlow]=useState(0);

   useEffect(function(){

    console.log("re-render")

   },[run,fast]);                 //use empty or multiple by giving comma [] or [run,fast] 

return (

<>
<button onClick={()=>setRun(run+1)} >run  {run}</button>
<button onClick={()=>setGo(go+1)}>go  {go}</button>
<button onClick={()=>setFast(fast+1)}>fast  {fast}</button>
<button onClick={()=>setSlow(slow+1)}>slow  {slow}</button>

</>
);
}
export default Useeffect;
