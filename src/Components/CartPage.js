import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const shippingOptions = [
  { method: 'Standard', cost: 5 },
  { method: 'Express', cost: 15 },
];

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  const [showHelp, setShowHelp] = useState(false);

  const handleShippingChange = (event) => {
    const selected = shippingOptions.find((option) => option.method === event.target.value);
    setSelectedShipping(selected);
  };

  const handleHelpClick = () => {
    setShowHelp(!showHelp);
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0) + selectedShipping.cost;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name} - R{item.price}</p>
            </div>
          ))}
          <div>
            <label htmlFor="shipping">Shipping Method: </label>
            <select id="shipping" onChange={handleShippingChange}>
              {shippingOptions.map((option) => (
                <option key={option.method} value={option.method}>
                  {option.method} - R{option.cost}
                </option>
              ))}
            </select>
          </div>
          <h3>Total Cost: R{totalCost}</h3>
          <div>
            <button onClick={handleHelpClick}>Help</button>
            {showHelp && (
              <div className="help-popup">
                <p>
                  **Shipping Options:** <br />
                  <strong>Standard Shipping</strong>: Delivered within 5-7 days for R5. <br />
                  <strong>Express Shipping</strong>: Delivered within 1-2 days for R15.
                </p>
                <button onClick={handleHelpClick}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
