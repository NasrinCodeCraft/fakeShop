import React from 'react';
import ProductComponent from './ProductComponent';
import { useSelector } from 'react-redux';

function ProductListing() {
  const product = useSelector((state) => state);
  console.log(product);
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing