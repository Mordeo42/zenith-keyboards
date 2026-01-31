import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";     //OF COURSE THERE'S ANOTHER GHOST ERROR 
import ProductsPage from "./components/ProductsPage"; 

function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <Footer />
      </main>
    </Router>
  );
}

export default App;