import React , {useEffect} from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from "../redux/actions/productActions"
function ProductListing() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProdocts = async () => {
    const response= await axios.get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err",err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
      fetchProdocts();
  },[])
  console.log("products: ", product);
  return (
    <div className='ui grid container'>
        <ProductComponent />
    </div>
  )
}

export default ProductListing