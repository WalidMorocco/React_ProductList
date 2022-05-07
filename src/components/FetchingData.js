import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom'

const FetchingData = () => {
  const { data: products, loading, error } = useFetch('products');

  if (loading) {
    return <Loading />;
  }

  if (error.length > 0) {
    return <p>{error}</p>;
  }
  return (
    <>
      {products.length &&
        products.map((product) => {
          return (
            <div class="productsList"key={product.id}>

              <div class="product">
                <div class="productImage">
                  <img class="image" src={product.image} ></img>
                </div>
      
                <div class="productInfo">
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  <Link to={`/products/${product.id}`}>
                  <button class="btn btn-primary">
                    Details
                  </button>
                </Link>
                </div>
                
                
              </div>
              

            </div>
            
          );
        })}
    </>
  );
};

export default FetchingData;