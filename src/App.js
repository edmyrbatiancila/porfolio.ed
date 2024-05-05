import React from 'react';
import Skills from './components/Skills/skills';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

