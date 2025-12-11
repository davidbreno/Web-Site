import { Award, MapPin, Phone, FileText } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-0 bg-slate-800 relative overflow-hidden">
      {/* Textura granulada discreta */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="paper-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-texture)" opacity="0.5"/>
        </svg>
      </div>
      
      {/* Gradientes suaves com blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-0">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative group cursor-pointer flex items-end h-full" style={{ transform: 'translateX(-3cm)' }}>
            <img 
              src="/foto-sobre.jpg" 
              alt="Dr. David Breno Santos"
              loading="lazy"
              className="rounded-lg w-full h-auto shadow-lg shadow-slate-900/40 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/30"
            />
          </div>

          <div className="space-y-6 py-20">
            <h2 className="text-white">
              <span className="text-rose-500">Dr. David Breno</span>
            </h2>
            <p className="text-slate-300">
              Implantodontia • Prótese Dentária • Cirurgia Avançada • Fotografia Odontológica Artística
            </p>
            <p className="text-slate-300 leading-relaxed">
              Meu trabalho nasce onde a ciência encontra a estética — e onde a precisão cirúrgica se transforma em arte. Atuo em Implantodontia, Prótese Dentária e Cirurgia Avançada com uma dedicação profunda ao detalhe: aquele detalhe que quase ninguém vê, mas que define o extraordinário.
            </p>
            <p className="text-slate-300 leading-relaxed">
              A fotografia odontológica artística é parte essencial da minha essência. Ela amplia meu olhar, afina minha percepção de luz, textura e simetria, e me permite enxergar cada sorriso como uma composição única. Essa sensibilidade acompanha cada planejamento, cada cirurgia e cada reabilitação que realizo.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Meu compromisso é criar resultados que encantam pela naturalidade: sorrisos que não se impõem, apenas fluem. Procedimentos realizados com rigor silencioso, tecnologia precisa e um cuidado que respeita a individualidade de cada rosto.
            </p>
            <p className="text-slate-300 leading-relaxed">
              A beleza verdadeira não precisa ser exagerada — ela é sentida.
              E é exatamente essa estética, discreta e atemporal, que guia tudo o que faço.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-slate-400">CRO</p>
                    <p className="text-white">MG 71-476</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-slate-400">Localização</p>
                    <p className="text-white">Curvelo - MG</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-slate-400">WhatsApp</p>
                    <a 
                      href="https://wa.me/5538999790464?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-rose-500 transition-colors"
                    >
                      (38) 99979-0464
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-slate-400">CNPJ</p>
                    <p className="text-white">63.845.827/0001-16</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5538999790464?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-md transition-colors mt-6"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}