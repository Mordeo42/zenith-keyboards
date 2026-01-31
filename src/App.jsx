import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default App;