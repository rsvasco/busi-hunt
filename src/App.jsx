import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Director from "./pages/Director";
import PondyChapter from "./pages/PondyChapter";
import FloatingActionButtons from "./components/FloatingButtons";
import ChennaiChapter from "./pages/ChennaiChapter";


function App() {
 

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/director" element={<Director />} />
        <Route path="/pondy-chapter" element={<PondyChapter />} />
        <Route path="/chennai-chapter" element={<ChennaiChapter />} />
        <Route path="/team" element={<Team />} />
        <Route path="/how-to-join" element={<Join />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <FloatingActionButtons />
      <Footer />
    </>
  )
}

export default App
