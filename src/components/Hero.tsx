import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const doctorPhoto = '/foto-perfil.jpg';
const logoImage = '/logo.png';

export function Hero() {
  return (
    <section id="home" className="flex items-center pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Elementos de fundo - esferas luminosas */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
      
      {/* Padrão de ondas orgânicas */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none"/>
              <path d="M0 60 Q 25 35, 50 60 T 100 60" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
        </svg>
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute top-32 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-600 rounded-full opacity-40 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-rose-500 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Efeito de vidro/glassmorphism */}
      <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-rose-500/5 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-4 mb-8 md:mb-20">
            <img
              src={logoImage}
              alt="Dr. David Breno"
              className="h-16 md:h-24 w-auto mb-4"
            />
            <p className="text-blue-400 tracking-wider">BEM-VINDO!</p>
            <h1 className="text-white">
              Sou Cirurgião-Dentista
            </h1>
            <p className="text-slate-300 max-w-xl">
              Transformo sorrisos com precisão cirúrgica, reabilitações de alta performance e uma estética que valoriza o natural. Atendo em Curvelo, MG, unindo técnica avançada, tecnologia atual e um olhar artístico que nasce da fotografia odontológica.
            </p>
            <p className="text-slate-300 max-w-xl">
              Excelência discreta, resultado marcante.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/dr.davidbreno" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://wa.me/5538999790464?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-colors"
                aria-label="WhatsApp"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="relative flex items-start justify-center md:items-end">
            <div className="relative z-10 w-full">
              <img 
                src={doctorPhoto}
                alt="Dr. David Breno"
                loading="lazy"
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}