import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const logoImage = '/logo.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-blue-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center gap-4 bg-slate-800/40 px-6 py-2 rounded-full shadow-inner shadow-blue-900/20 border border-slate-700/40">
                {[
                  { label: 'INÍCIO', id: 'home' },
                  { label: 'SOBRE', id: 'about' },
                  { label: 'PORTFÓLIO', id: 'portfolio' },
                  { label: 'CONTATO', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-5 py-2 rounded-full border border-transparent bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/60 text-white tracking-wide transition-all hover:from-blue-600/30 hover:via-purple-600/20 hover:to-blue-700/30 hover:text-white hover:border-blue-500/70 shadow-md shadow-blue-900/30 backdrop-blur"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-3 rounded-md bg-slate-900/60 text-white hover:bg-slate-800 hover:text-blue-300 transition-all"
              >
                INÍCIO
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 rounded-md bg-slate-900/60 text-white hover:bg-slate-800 hover:text-blue-300 transition-all"
              >
                SOBRE
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-3 rounded-md bg-slate-900/60 text-white hover:bg-slate-800 hover:text-blue-300 transition-all"
              >
                PORTFÓLIO
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 rounded-md bg-slate-900/60 text-white hover:bg-slate-800 hover:text-blue-300 transition-all"
              >
                CONTATO
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo no Footer */}
            <img 
              src={logoImage}
              className="h-64 sm:h-80 lg:h-96 w-auto object-contain opacity-90"
            />
            
            <div className="text-center text-slate-400">
              <p>Dr. David Breno Santos - CRO MG 71-476</p>
              <p className="mt-2">CNPJ: 63.845.827/0001-16</p>
              <p className="mt-2">Curvelo - MG</p>
              <p className="mt-4">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}