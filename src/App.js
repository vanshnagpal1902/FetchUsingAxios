// import logo from './logo.svg';
// // import './App.css';
// import Useeffect from './fetch/Useeffect';
// import FetchingExample from './fetch/FetchingExample';
// import FetchingCards from './fetch/FetchingCards';
// import Fetchingcardsasyncawait from './fetch/Fetchingcardsasyncawait';
import Fetchingusingaxios from './fetch/Fetchingusingaxios';
// import NewCompo from './fetch/NewCompo';
import { useState } from 'react';


function App() {
  // const [bag, setBag] = useState([]); 
  
  // function HandlerRemove(idd)
  // {
  //   const filtered=bag.filter(ele=>ele.id!==idd);
  //   console.log(filtered);
  //   setBag(filtered);
  // }
  // function HandlerAddtoBag(item)
  //   {
  //           setBag([...bag, item]);

  //           console.log(bag);
  //   }
  return (
<>
 {/* <div className='row'>
  {
    bag.map(item=>(
      <div className='card'>
        <h1>{item.title}</h1>
        <button onClick={()=>HandlerRemove(item.id)} >X</button>
      </div>
    ))
  }
</div>
<div className='row'>
  <NewCompo  myfunction={HandlerAddtoBag}/>
</div>  */}
{/* <Useeffect/> */}

<Fetchingusingaxios/>

</>
  );
}

export default App;
