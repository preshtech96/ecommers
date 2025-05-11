import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import Nav from './components/Nav.jsx';
import Foodpage from "./Pages/Foodpage.jsx";
import Electpage from "./Pages/Electpage.jsx";
import Wearspage from "./Pages/Wearspage.jsx";
import News from "./Pages/News.jsx";
import Footer from "./components/Footer.jsx";




function App() {
  

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Foodpage" element={<Foodpage />} />
            <Route path="/Electpage" element={<Electpage />} />
            <Route path="/Wearspage" element={<Wearspage />} />
            <Route path="/News" element={<News />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
