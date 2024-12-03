import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const username = useSelector((state) => state.user.username); 

  return (
    <header className="header">
      <h1>Purple Nail Store</h1>
      {username && <p>Welcome, {username}!</p>} 
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/products">Shop</Link> |
        <Link to="/cart">Cart</Link> |

      </nav>
    </header>
  );
};

export default Header;
