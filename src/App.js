import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Trending from './Components/Trending';
import Gift from './Components/Gift';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Ring from './jewellery/Ring';
import NecklacePage from './jewellery/NecklacePage';
import BraceletPage from './jewellery/BraceletPage';
import PursePage from './jewellery/PursePage';
import PerfumePage from './jewellery/PerfumePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/shop" element={<Shop />} />

          {/* Jewelry Pages */}
          <Route path="/jewellery/ring" element={<Ring />} />
          <Route path="/jewellery/necklaces" element={<NecklacePage />} />
          <Route path="/jewellery/bracelets" element={<BraceletPage />} />
          <Route path='/jewellery/purse' element={<PursePage/>}/> 
          <Route path='/jewellery/perfume' element={<PerfumePage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
