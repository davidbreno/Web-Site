import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5538999790464?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Padrão de ondas fluidas */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fluid-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,80 100,100 T200,100" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5"/>
              <path d="M0,120 Q50,100 100,120 T200,120" fill="none" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1"/>
              <path d="M0,140 Q50,125 100,140 T200,140" fill="none" stroke="rgba(236, 72, 153, 0.2)" strokeWidth="1"/>
              <circle cx="50" cy="50" r="3" fill="rgba(59, 130, 246, 0.15)"/>
              <circle cx="150" cy="170" r="4" fill="rgba(139, 92, 246, 0.1)"/>
              <circle cx="180" cy="60" r="2" fill="rgba(236, 72, 153, 0.12)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fluid-pattern)"/>
        </svg>
      </div>
      
      {/* Gradientes decorativos com blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/4 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            ENTRE EM <span className="text-rose-500">CONTATO</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Está pronto para transformar seu sorriso? Entre em contato e agende sua consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-lg">
                  <Phone className="text-rose-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5538999790464" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-rose-500 transition-colors"
                  >
                    (38) 99979-0464
                  </a>
                  <p className="text-slate-400 mt-1">Resposta rápida via WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-lg">
                  <MapPin className="text-rose-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Localização</h3>
                  <p className="text-slate-300">Curvelo - MG</p>
                  <p className="text-slate-400 mt-1">Atendimento personalizado</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-rose-500 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-rose-500/10 p-3 rounded-lg">
                  <Clock className="text-rose-500" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Horário de Atendimento</h3>
                  <p className="text-slate-300">Segunda a Sexta</p>
                  <p className="text-slate-400 mt-1">Entre em contato para agendar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form / CTA */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
            <h3 className="text-white mb-4">Agende Sua Consulta</h3>
            <p className="text-slate-300 mb-6">
              Clique no botão abaixo para entrar em contato via WhatsApp e agendar sua consulta de forma rápida e prática.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg transition-colors flex items-center justify-center gap-3 mb-6"
            >
              <Phone size={20} />
              Agendar via WhatsApp
            </button>

            <div className="border-t border-slate-700 pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-rose-500" size={18} />
                <div>
                  <p className="text-slate-400">Informações Profissionais</p>
                  <p className="text-white">Dr. David Breno Santos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <span className="text-rose-500">CRO</span>
                </div>
                <div>
                  <p className="text-slate-400">Registro Profissional</p>
                  <p className="text-white">MG 71-476</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <span className="text-rose-500">CNPJ</span>
                </div>
                <div>
                  <p className="text-slate-400">Identificação</p>
                  <p className="text-white">63.845.827/0001-16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}