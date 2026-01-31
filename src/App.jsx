import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";     //OF COURSE THERE'S ANOTHER GHOST ERROR 
import ProductsPage from "./components/ProductsPage"; 
import CommunityPage from "./components/CommunityPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen flex flex-col justify-between">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        
        <Footer />
      </main>
    </Router>
  );
}

export default App;