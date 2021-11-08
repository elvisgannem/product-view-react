import React from 'react'
import { CartContext } from './context/CartContext'
import Navbar from './components/Navbar/index'
import ImagesDisplay from './components/ImagesDisplay/index'
import ProductDescription from './components/ProductDescription/index'
import ImageProduct1 from './images/image-product-1.jpg'
import ImageProduct2 from './images/image-product-2.jpg'
import ImageProduct3 from './images/image-product-3.jpg'
import ImageProduct4 from './images/image-product-4.jpg'
import ImageThumbnail1 from './images/image-product-1-thumbnail.jpg'
import ImageThumbnail2 from './images/image-product-2-thumbnail.jpg'
import ImageThumbnail3 from './images/image-product-3-thumbnail.jpg'
import ImageThumbnail4 from './images/image-product-4-thumbnail.jpg'

const productImages = [
  {
    image: ImageProduct1,
    thumbnail: ImageThumbnail1
  },
  {
    image: ImageProduct2,
    thumbnail: ImageThumbnail2
  },
  {
    image: ImageProduct3,
    thumbnail: ImageThumbnail3
  },
  {
    image: ImageProduct4,
    thumbnail: ImageThumbnail4
  },
]

function App() {
  
  const [cartItems, setCartItems] = React.useState(0)
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="App">
        <Navbar />
        <div className="container">
          <ImagesDisplay productImages={productImages} />
          <ProductDescription />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
