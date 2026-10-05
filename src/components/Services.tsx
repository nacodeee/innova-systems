import {
  Lightbulb,
  ShieldCheck,
  Thermometer,
  Zap,
  Wifi,
  Camera,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Automatización del confort',
    description:
      'Gestión centralizada de iluminación, persianas, cortinas motorizadas y climatización. Controla todo desde tu móvil o panel táctil.',
    image:
      'https://images.pexels.com/photos/36714301/pexels-photo-36714301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad integral',
    description:
      'Detectores de presencia, sensores de inundación y humo, alarmas y control de accesos. Tu propiedad protegida 24/7.',
    image:
      'https://images.pexels.com/photos/27662922/pexels-photo-27662922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-red-50 text-red-700',
  },
  {
    icon: Zap,
    title: 'Eficiencia energética',
    description:
      'Monitorización del consumo eléctrico en tiempo real y programación inteligente de cargas para reducir tu factura.',
    image:
      'https://images.pexels.com/photos/6601008/pexels-photo-6601008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Camera,
    title: 'Videovigilancia',
    description:
      'Cámaras IP de alta resolución, grabación en la nube y acceso remoto desde cualquier dispositivo.',
    image:
      'https://images.pexels.com/photos/27505236/pexels-photo-27505236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    icon: Wifi,
    title: 'Instalación de redes',
    description:
      'Diseño e instalación de infraestructuras de red cableadas e inalámbricas optimizadas para entornos domóticos.',
    image:
      'https://images.pexels.com/photos/30170004/pexels-photo-30170004.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Thermometer,
    title: 'Control de climatización',
    description:
      'Programación avanzada de sistemas de calefacción, refrigeración y ventilación integrados en tu ecosistema domótico.',
    image:
      'https://images.pexels.com/photos/23459391/pexels-photo-23459391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    color: 'bg-orange-50 text-orange-700',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Soluciones a medida
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Desde la primera visita hasta el soporte postventa, cubrimos todo el ciclo de
            vida de tu instalación inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, image, color }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
