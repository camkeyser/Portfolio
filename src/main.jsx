import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => (
  <>
    <Header />
    <Hero />
    <Projects />
    <Experience />
    <Footer />
  </>
);

const rootElement = document.getElementById('main-content');
const root = createRoot(rootElement);

root.render(<App />);