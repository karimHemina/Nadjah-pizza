import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, SweetsData } from './components/Products/data';
import Feature from './components/Featured';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading = 'choose your favorite' data={productData} />
      <Feature />
      <Products heading = 'Sweet Treats for you' data={SweetsData} />
      <Footer />
    </Router>
  );
}

export default App;
