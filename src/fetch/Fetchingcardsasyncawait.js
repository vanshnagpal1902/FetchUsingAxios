import Cards from './Cards';
import { useState, useEffect } from "react";

function Fetchingcardsasyncawait() {
    const [users, setUsers] = useState([]);

    
    const fetchData = async () => {
            
        const response = await fetch("https://dummyjson.com/products");
     
        const data = await response.json();
      
        setUsers(data.products);
        console.log(data.products);
    };


    useEffect(() => {
       
        fetchData();
    }, []); 

    return (
        <>
            <div className="row m-24">
                {
                    users.map((prod) => (
                        <Cards key={prod.id} payload={prod}/> // It's important to use a key prop when mapping over an array
                    ))
                }
            </div>
        </>
    );
}

export default Fetchingcardsasyncawait ;
