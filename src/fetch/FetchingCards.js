import Cards from './Cards';
import { useState,useEffect } from "react";
function FetchingCards()
{
    const [users,setUsers]=useState([]);

    useEffect(()=>{  
        const data=fetch("https://dummyjson.com/products");
        data.then((a)=>{

            const res=a.json();

            res.then((b)=>{

                setUsers(b.products);
                
             console.log(b.products);
            })
    })
},[]);      

    return (
        <>
        <div className="row m-24">

      {
         
      users.map((prod)=>(

         <Cards payload={prod}/>      /* //if multiple use <> </> this }*/       
            
      ))
     
      }
     </div>
        </>
    );
}
export default FetchingCards;