import React from 'react';
import Loading from './Loading';
import useFetchId from '../hooks/useFetchId';
import {useParams} from 'react-router-dom'
import {Link, Outlet, useNavigate} from 'react-router-dom'

const FetchingData = () => {

    const { id } = useParams();
    const { data: product, loading, error } = useFetchId('products', id);
    const navigate = useNavigate();


    const handleShowFetchDataDemo = () => {
      navigate('/products');
    };
  
    if (loading) {
        return <Loading />;
    }

    if (error.length > 0) {
        return <p>{error}</p>;
    }
    console.log("id:", product.id)

    return (
        <>
            <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <img src={product.image}></img>
            </div>
        </>
        
    );
};

export default FetchingData;