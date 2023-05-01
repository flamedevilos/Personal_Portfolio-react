import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { ErrorPage } from "./pages/error404/ErrorPage";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    setPreload(true);
    setTimeout(() => {
      setPreload(false);
    }, 2000);
  }, []);
  return (
    <>
      {preload ? (
        <Preloader />
      ) : (
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
