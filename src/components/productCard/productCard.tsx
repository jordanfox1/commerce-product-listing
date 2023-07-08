import { Product } from '../../types/product.interface';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  return (
    <div className="product-card">
      {product.isSale && <span>Sale</span>}

      <img src={product.productImage} alt="A picture of the listed product" />
      <h2>{product.productName}</h2>
      <p>{`${product.price}`}</p>
    </div>
  );
}
