import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store'; 
import Header from './Components/Header'; 
import LandingPage from './Components/LandingPage'; 
import ProductPage from './Components/ProductPage'; 
import CartPage from './Components/CartPage'; 
import './App.css';  
import RegistrationForm from './Components/RegistrationForm';
import Login from './Components/Login'; 

function App() {
  const [username, setUsername] = useState(''); // State to store logged-in username

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* Display username in the Header if logged in */}
          <Header username={username} />
          <Routes>
            {/* Set the registration form as the default route */}
            <Route path="/" element={<RegistrationForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<Login setUsername={setUsername} />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
