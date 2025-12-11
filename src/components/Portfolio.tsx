import { useState } from 'react';

// Imagens do portfólio
// INSTRUÇÕES PARA SUBSTITUIR AS FOTOS:
// 1. Após baixar o projeto, crie uma pasta chamada "public" na raiz (se não existir)
// 2. Dentro de public, crie uma pasta "portfolio"
// 3. Coloque suas fotos lá com os nomes: foto1.jpg até foto9.jpg
//    - foto1 a foto6: imagens Artísticas
//    - foto7 a foto9: imagens de Procedimentos
// 4. As imagens vão funcionar automaticamente!
// 
// Estrutura de pastas:
// projeto/
//   public/
//     portfolio/
//       foto1.jpg
//       foto2.jpg
//       foto3.jpg
//       ...

const portfolioImages = [
  {
    id: 1,
    url: '/portfolio/foto1.jpg',
    title: 'Fotografia Odontológica 1',
    category: 'Artística'
  },
  {
    id: 2,
    url: '/portfolio/foto2.jpg',
    title: 'Fotografia Odontológica 2',
    category: 'Artística'
  },
  {
    id: 3,
    url: '/portfolio/foto3.jpg',
    title: 'Fotografia Odontológica 3',
    category: 'Artística'
  },
  {
    id: 4,
    url: '/portfolio/foto4.jpg',
    title: 'Fotografia Odontológica 4',
    category: 'Artística'
  },
  {
    id: 5,
    url: '/portfolio/foto5.jpg',
    title: 'Fotografia Odontológica 5',
    category: 'Artística'
  },
  {
    id: 6,
    url: '/portfolio/foto6.jpg',
    title: 'Fotografia Odontológica 6',
    category: 'Artística'
  },
  {
    id: 7,
    url: '/portfolio/foto7.jpg',
    title: 'Procedimento Odontológico 1',
    category: 'Procedimentos'
  },
  {
    id: 8,
    url: '/portfolio/foto8.jpg',
    title: 'Procedimento Odontológico 2',
    category: 'Procedimentos'
  },
  {
    id: 9,
    url: '/portfolio/foto9.jpg',
    title: 'Procedimento Odontológico 3',
    category: 'Procedimentos'
  }
];

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState('Artística');
  
  const categories = ['Artística', 'Procedimentos'];
  
  const filteredImages = portfolioImages.filter(img => img.category === selectedFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Padrão de hexágonos sutis */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" x="0" y="0" width="160" height="140" patternUnits="userSpaceOnUse">
              <path d="M40,20 L60,10 L80,20 L80,40 L60,50 L40,40 Z" fill="none" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1"/>
              <path d="M120,20 L140,10 L160,20 L160,40 L140,50 L120,40 Z" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1"/>
              <path d="M80,70 L100,60 L120,70 L120,90 L100,100 L80,90 Z" fill="rgba(59, 130, 246, 0.05)"/>
              <path d="M0,70 L20,60 L40,70 L40,90 L20,100 L0,90 Z" fill="none" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)"/>
        </svg>
      </div>
      
      {/* Efeitos de luz e gradientes */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-600/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            MEU <span className="text-rose-500">PORTFÓLIO</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Fotografias artísticas odontológicas que capturam a essência do trabalho profissional e a beleza dos sorrisos transformados.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedFilter === category
                  ? 'bg-rose-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-square bg-slate-800 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <img 
                src={image.url}
                alt={image.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-blue-400 mb-1">{image.category}</p>
                  <h3 className="text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
