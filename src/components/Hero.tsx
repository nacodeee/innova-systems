import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/36730582/pexels-photo-36730582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b6d]/90 via-[#1a2b6d]/75 to-[#0f1a42]/85" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">Domótica profesional en Castellón</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
          Tu hogar,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
            más inteligente
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Diseñamos, instalamos y mantenemos sistemas domóticos personalizados para viviendas,
          comercios y empresas. Tecnología propia, instalación profesional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-red-600/30"
          >
            Solicitar presupuesto gratuito
          </a>
          <a
            href="#servicios"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200"
          >
            Conocer servicios
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: '100%', label: 'Personalizado' },
            { value: 'IoT', label: 'Tecnología propia' },
            { value: '360°', label: 'Servicio integral' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{value}</div>
              <div className="text-white/60 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
