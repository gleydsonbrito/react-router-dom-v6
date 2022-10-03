import Header from "./Header";
import Footer from './Footer'
import Product from "./Product";

import './home.css'
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => setProducts([...res.products]))
  })
  return ( 
    <div>
      <Header />
        <main className="container">
          <div className="products-container">
            {products.map( p => {
              return (<Product
              id={p.id}
              thumbnail={p.thumbnail}
              title={p.title}
              rating={p.rating}
              price={p.price}
              />)
            })}
          </div>
          
        </main>
      <Footer />
    </div>
   );
}

export default Home;