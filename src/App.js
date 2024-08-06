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
import BlogInfo from './pages/BlogInfo';
import { ToastContainer } from 'react-toastify';
import Thank from './pages/Thank';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<ProductsCategory />} />
          <Route path="/products/:category/:subcategory" element={<Products />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog/:title" element={<BlogInfo />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/thank" element={<Thank/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
