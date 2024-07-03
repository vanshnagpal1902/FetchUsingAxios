import { useState,useEffect } from "react";
import Cards from "./Cards";


function Fetchprac()
{
    const [users,setusers]=useState([]);
useEffect(()=>{
    const fetchdata = async()=>{
     const response=await axios("https://dummyjson.com/products");
     setusers(response.products);
    }
},[]);
    return (
   <>
    {users.map((v)=>(
        <Cards payload={v}/>

    ))}
  </>

    );
}
export default Fetchprac;
