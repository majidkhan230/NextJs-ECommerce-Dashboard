'use client'
import ProductCard from '@/components/ui/ProductCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Productspage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data); 
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-start flex-wrap gap-4">
      {products.map((item) => {
        return (
          <ProductCard key={item.id} data={item} />
        );
      })}
    </div>
  );
};

export default Productspage;
