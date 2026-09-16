import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BASE_PATH } from './lib/config';
import { ScrollRevealProvider } from './components/ScrollReveal';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Extensions from './pages/Extensions';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter basename={BASE_PATH}>
      <ScrollRevealProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="extensions" element={<Extensions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollRevealProvider>
    </BrowserRouter>
  );
}

export default App;
