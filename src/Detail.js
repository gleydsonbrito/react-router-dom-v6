import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import next from './assets/next.png'

import './detail.css'

function Detail() {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(res => setProduct(res))
  }, [id])

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

  return ( 
    <div>
      <Header />
        <section className='container-detail'>
          <div className='caroussel'>
            <img className='car' src={product.images[index]} alt='caroussel' width={'100%'} height={"100%"}/>
            <img onClick={handleBack} className='btn back' src={next} width={70} height={70} alt='caroussel'/>
            <img onClick={handleNext} className='btn next' src={next} width={70} height={70} alt='caroussel'/>
          </div>
        </section>
      <Footer />
    </div>
   );
}

export default Detail;