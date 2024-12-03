import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ProductPage.css'; 

const products = [
  { id: 1, name: 'Purple Nail Polish', price: 10, colors: ['Purple', 'Pink', 'Blue'], image: '/images/gel-polish.jpeg' },
  { id: 2, name: 'Nail File Set', price: 45, image: '/images/nail-file-set.jpeg' },
  { id: 3, name: 'Cuticle Oil', price: 8,  image: '/images/cuticle-oil.jpeg' },
  { id: 4, name: 'Large UV Lamp', price: 40, image: '/images/large-uv-lamp.jpeg' },
  { id: 5, name: 'Acrylic Monomer', price: 25, image: '/images/acrylic-monomer.jpeg' },
  { id: 6, name: 'Poly gel Extension gel', price: 20, image: '/images/poly-gel-extension.jpeg' },
  { id: 7, name: 'Portable nail drill', price: 250, image: '/images/portable-nail-drill.jpeg' },
  { id: 8, name: 'Extra Strong Nail glue', price: 10, image: '/images/nail-glue.jpeg' },
  { id: 9, name: '3D Gold nail stickers', price: 10, image: '/images/gold-nail-stickers.jpeg' },
  { id: 10, name: 'Multipurpose Disposable gloves', price: 50, image: '/images/disposable-gloves.jpeg' },
  { id: 11, name: 'Nail dust brush', price: 18, image: '/images/nail-dust-brush.jpeg' },
  { id: 12, name: '3D Bow knot charms', price: 17, image: '/images/bow-knot-charms.jpeg' },
  { id: 13, name: 'Nail Display Tips', price: 95, image: '/images/nail-display-tips.jpeg' },
  { id: 14, name: 'Line Art Gel', price: 80, image: '/images/line-art-gel.jpeg' },
  { id: 15, name: 'Tip Cutter', price: 40, image: '/images/tip-cutter.jpeg' }
];

const ProductPage = () => {
  const dispatch = useDispatch();
  
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorChange = (productId, color) => {
    setSelectedColors(prevState => ({ ...prevState, [productId]: color }));
  };

  const addToCart = (product) => {
    const selectedColor = selectedColors[product.id] || '';
    const productToCart = { ...product, color: selectedColor };
    dispatch({ type: 'ADD_TO_CART', payload: productToCart });
  };

  return (
    <div>
      <h2>Shop</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
        
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: R{product.price}</p>

            {product.colors && (
              <div>
                <label htmlFor={`color-${product.id}`}>Colour:</label>
                <select
                  id={`color-${product.id}`}
                  value={selectedColors[product.id] || ''}
                  onChange={(e) => handleColorChange(product.id, e.target.value)}
                >
                  <option value="">Select Color</option>
                  {product.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
            )}

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
