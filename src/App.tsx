
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import SuccessStories from './pages/SuccessStories';
import About from './pages/About';
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="about" element={<About />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;