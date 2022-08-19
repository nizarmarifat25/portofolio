import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer';
import { NavbarComp } from './component/NavbarComp';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/experience" element={<Experience />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/skills" element={<Skills />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes >
      <Footer />
    </div >
  );
}

export default App;
