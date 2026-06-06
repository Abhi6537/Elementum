import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

import { ReactLenis } from 'lenis/react';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Services />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
