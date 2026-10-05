import { Cpu, Wrench, BarChart2 } from 'lucide-react';

const team = [
  {
    name: 'Ignacio Gimenez',
    role: 'Director Técnico',
    area: 'I+D y Desarrollo de Dispositivos',
    icon: Cpu,
    color: 'bg-blue-100 text-blue-700',
    description:
      'Responsable del diseño y desarrollo de los sensores y dispositivos propios de la empresa, así como de la arquitectura técnica de las instalaciones.',
  },
  {
    name: 'Fadi Djerdali',
    role: 'Jefe de Operaciones',
    area: 'Montajes e Instalaciones',
    icon: Wrench,
    color: 'bg-red-100 text-red-700',
    description:
      'Coordina y ejecuta todos los proyectos de instalación, desde la pre-configuración en taller hasta la puesta en marcha en la obra.',
  },
  {
    name: 'Mohammed Alghuraibi',
    role: 'Responsable Comercial',
    area: 'Atención al Cliente y Marketing',
    icon: BarChart2,
    color: 'bg-amber-100 text-amber-700',
    description:
      'Gestiona la relación con los clientes, las estrategias de captación y las alianzas con empresas de arquitectura, reformas y construcción.',
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            El equipo fundador
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Expertos en telecomunicaciones
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Tres socios con formación especializada que cubren cada etapa del proyecto: desde el
            diseño técnico hasta la gestión comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map(({ name, role, area, icon: Icon, color, description }) => (
            <div
              key={name}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${color}`}>
                <Icon size={26} />
              </div>
              <div className="text-xs font-semibold text-red-600 uppercase tracking-widest mb-1">{area}</div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{name}</h3>
              <div className="text-[#1a2b6d] font-semibold text-sm mb-4">{role}</div>
              <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
