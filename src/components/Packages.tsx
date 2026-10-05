import { Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 'basic',
    name: 'Paquete Básico',
    subtitle: 'Seguridad',
    description: 'Ideal para quienes quieren empezar con seguridad y control de accesos.',
    features: [
      'Control de accesos',
      'Detección de intrusión',
      'Detección de incendios/humo',
      'Sensores de presencia',
      'Alertas en tiempo real',
      'Soporte técnico incluido',
    ],
    cta: 'Solicitar presupuesto',
    highlight: false,
  },
  {
    id: 'energy',
    name: 'Paquete Eficiencia',
    subtitle: 'Energética',
    description: 'Reduce tu consumo y controla iluminación y climatización desde el móvil.',
    features: [
      'Control de climatización',
      'Gestión de iluminación',
      'Medición de consumo en tiempo real',
      'Programación de cargas',
      'Panel de control intuitivo',
      'Informes de ahorro energético',
    ],
    cta: 'Solicitar presupuesto',
    highlight: true,
  },
  {
    id: 'business',
    name: 'Smart Business',
    subtitle: 'Para empresas',
    description: 'Automatización avanzada para comercios, oficinas y edificios corporativos.',
    features: [
      'Todo lo del paquete Eficiencia',
      'Videovigilancia IP',
      'Automatización persianas/puertas',
      'Redes estructuradas',
      'Sensores propietarios a medida',
      'Contrato de mantenimiento preferente',
    ],
    cta: 'Solicitar presupuesto',
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="paquetes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Nuestros paquetes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Soluciones modulares y escalables
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Todos los presupuestos son cerrados y personalizados. Sin permanencias obligatorias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map(({ id, name, subtitle, description, features, cta, highlight }) => (
            <div
              key={id}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? 'bg-[#1a2b6d] text-white shadow-2xl shadow-[#1a2b6d]/30 scale-105'
                  : 'bg-white text-slate-900 border border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                    highlight ? 'text-red-400' : 'text-red-600'
                  }`}
                >
                  {subtitle}
                </div>
                <h3 className={`text-2xl font-extrabold mb-3 ${highlight ? 'text-white' : 'text-slate-900'}`}>
                  {name}
                </h3>
                <p className={highlight ? 'text-white/70' : 'text-slate-500'}>{description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        highlight ? 'bg-red-500/20 text-red-400' : 'bg-[#1a2b6d]/10 text-[#1a2b6d]'
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-slate-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`flex items-center justify-center gap-2 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 ${
                  highlight
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-[#1a2b6d] hover:bg-[#243580] text-white'
                }`}
              >
                {cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          ¿Necesitas algo diferente? Diseñamos soluciones completamente a medida.{' '}
          <a href="#contacto" className="text-[#1a2b6d] font-semibold hover:underline">
            Cuéntanos tu proyecto.
          </a>
        </p>
      </div>
    </section>
  );
}
