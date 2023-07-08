import { JSX, useState } from 'react';
import { Product } from '../../types/product.interface';
import './productCard.css';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error('Image not found');
  };

  return (
    <article role="product-card" className="product-card">
      {product.isSale && <span className='sale-icon'>Sale</span>}

      <figure>
        {!imageLoaded && <div className="default-image">Loading...</div>}
        <img
          className={`product-image ${imageLoaded ? 'loaded' : 'not-loaded'}`}
          width={200}
          height={200}
          src={product.productImage}
          alt="A picture of the listed product"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </figure>

      <div className="product-details">
        <p>{product.productName}</p>
        <p><b>{product.price}</b></p>
      </div>
    </article>
  );
};
