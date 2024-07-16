import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductsCategory from './pages/ProductsCategory';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import Blog from './pages/blog';
import ErrorPage from './pages/error'
import Products from './pages/Products';
import ScrollToTop from '../src/components/common/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/category" element={<ProductsCategory />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
