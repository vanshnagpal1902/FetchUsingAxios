import { useState } from 'react';
import './NewCompo.css'

function NewCompo({myfunction})
{
    
    const products=[
        {id:1, title:"Chair" ,price:200},
        {id:2, title:"tv" ,price:300},
        {id:3, title:"keyboard" ,price:500},
        {id:4, title:"laptop" ,price:800},
        {id:5, title:"shoes" ,price:1200},
        {id:6, title:"bag" ,price:1300},
 ]

  const filtered=products.filter(ele=>ele.price>=400);
    
    return (
        <>
        {products.map((ele)=>(
            <>
           
            
                <div className="card">
                    <h1 className="title">{ele.title}</h1>
                    <h2 className="price">{ele.price}</h2>
                    <button onClick={()=>myfunction(ele)}>Add to Bag</button>
                </div>
    
          </>
        ))}
        </>
    )
}
export default NewCompo;