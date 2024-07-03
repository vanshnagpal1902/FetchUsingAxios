import React, { useEffect, useState } from 'react';

function FetchingExample() {
    const [users, setUser] = useState([]);
    
    useEffect(()=>{
        const data = fetch('https://jsonplaceholder.typicode.com/users');
        data.then(function(d){
        const res = d.json();
        res.then(function(u){
            setUser(u);
            console.log(users);
        })
    })
    },[]);
    
    return (
        <>
        <div>
            <h1>Fetch Data</h1>
            {
                users.map(user=>(
                    <>
                        <h1>{user.name}</h1>
                        <p>{user.email} {user.username}</p>
                    </>
                ))
            }
        </div>
        </>
    );
}

export default FetchingExample;