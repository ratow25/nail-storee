import React from 'react';
import { useSelector } from 'react-redux';

const LandingPage = () => {
  const username = useSelector((state) => state); 
  console.log(username);
  return (
    <div>
      <h2>Welcome to Pwerple Nail Store</h2>
      {/*{username && <h3>Hello, {username}!</h3>} */}

    </div>
  );
};

export default LandingPage;
