import { Link } from "react-router-dom";
import "./ProductCards.css";

export default function ProductCard({ product }) {
  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-media">
        <img src={product.image} alt={product.name} loading="lazy" className="product-image"/>
      </div>

      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-short">{product.shortDescription}</p>
        <div className="product-meta">
          <span className="product-badge">{product.category}</span>
        </div>

        <Link to={`/product/${product.id}`} className="view-btn-link">
          <button className="view-btn" type="button">View More</button>
        </Link>
      </div>
    </article>
  );
}
