import { Product } from '../../types/product.interface';
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  return (
    <div className="todo">
      <img src={product.productImage} alt="Product Image" />
      <h2>{product.productName}</h2>
      <p>{`$${product.price}`}</p>
    </div>
  );
}
