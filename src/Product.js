import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

function Product(props) {
  const navigate = useNavigate()
  
  function handleDetailProduct(){
    navigate(`/products/${props.id}`)
  }

  return (  
    <div className='product-container' key={props.id} onClick={handleDetailProduct}>
      <img src={props.thumbnail} width={300} height={150} alt='thumb'/>
      <p className='title'>{props.title}</p>
      <p className='rating'>Avaliação {props.rating}</p>
      <p className='olderPrice'>{`R$ ${(props.price*1.1).toFixed(2)}`}</p>
      <p className='price'>{`R$ ${props.price}`}</p>
      <p className='info-discount'>{`No PIX `}</p>
      <p className='payment-method'>{`Ou em 5x sem juros de ${((props.price*1.1)/5).toFixed(2)}`}</p>
    </div>
  );
}

export default Product;