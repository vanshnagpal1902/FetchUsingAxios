import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Fetchingusingaxios() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Starting fetch...'); // Log before making the request
        const res = await axios.get("https://dummyjson.com/products");
        console.log('API response:', res); // Log the full response
        setProducts(res.data.products);
        console.log('Fetched products:', res.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row m-24">
      {products.length > 0 ? (
        products.map((prod) => (
          <Cards key={prod.id} payload={prod} />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Fetchingusingaxios;
