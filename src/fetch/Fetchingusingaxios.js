import Cards from './Cards';
import { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios

function Fetchingcardsasyncawait() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res= await axios.get("https://dummyjson.com/products");{/*axios .get by default hota hai baki put delete update post */}
            //const d = response.json();

            setUsers(res.data.products);
            console.log(res.data.products);
        };

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

export default Fetchingcardsasyncawait;
