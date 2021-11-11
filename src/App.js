import './App.css';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductVariety from './components/ProductVariety';

function App() {
  return (
    <div className="app">
      <Announcement />
      <Navbar />
      <ProductDetail />
      <Product />
      <ProductVariety />
      <Footer />
    </div>
  );
}

export default App;
