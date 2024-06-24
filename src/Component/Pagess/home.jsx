import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import './home.css'; // Import the CSS file for styling

const home = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to our Footwear Store</h1>
        <nav>
          <ul>
            <li><Link to="/products">Shop</Link></li> {/* Link to your products page */}
            <li><Link to="/about">About Us</Link></li> {/* Link to your about page */}
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>
      <main>
        <section className="featured-products">
          <h2>Featured Products</h2>
          {/* Display featured products here */}
          {/* You can map through an array of featured products and display each one */}
          {/* Example: <ProductCard key={product.id} product={product} /> */}
        </section>
        <section className="newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          {/* Newsletter subscription form */}
          {/* Example: <NewsletterForm /> */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our Footwear Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default home;
