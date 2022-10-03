import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import next from './assets/next.png'
import _loading from './assets/giphy.gif'

import './detail.css'

function Detail() {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [list, SetList] = useState([])
  const [index, setIndex] = useState(0)
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => { 
      console.log(res)
      setProduct(res)
      SetList(res.images)
      setIsloading(false)
    }
  )}, [id])

  function handleBack(){
    if(index > 0){
      setIndex(index - 1)
    }
  }

  function handleNext(){
    if(index < product.images.length-1){
      setIndex(index + 1)
    }
  }

  const loading = <div className='_loading' ><img src={_loading} alt='gif'/></div>

  return ( 
    <div>
      <Header />
      <section className='container'>
        <article className='container-detail'>
            <div className='caroussel'>
              {isloading ?
              loading :
              <img src={list[index]} alt='caroussel' width={'100%'} height={"100%"}/>
              }
              <img onClick={handleBack} className='btn back' src={next} width={70} height={70} alt='caroussel'/>
              <img onClick={handleNext} className='btn next' src={next} width={70} height={70} alt='caroussel'/>
            </div>
        </article>
        <article className='container-infos'>
          <h3 className='older'>R$ {Math.round(product.price*(1 + (product.discountPercentage/100)))}</h3>
          <h1 className='price'>R$ {product.price}</h1>
          <p className='desc'>{product.description}</p>
          <h3 className='discount'>Desconto de {product.discountPercentage}%</h3>
          <p className='brand'>{product.brand}</p>
          <p className='category'>Categoria: {product.category}</p>
          <p className='stock'>{`Ainda temos ${product.stock} produtos em estoque`}</p>
        </article>
      </section>
      <Footer />
    </div>
   );
}

export default Detail;