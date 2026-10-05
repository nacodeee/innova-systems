const steps = [
  {
    number: '01',
    title: 'Evaluación técnica',
    description:
      'Visitamos tu inmueble para analizar las necesidades, tomar medidas y entender qué solución encaja mejor con tu estilo de vida o negocio.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    description:
      'Diseñamos la instalación y te entregamos un presupuesto cerrado y detallado. Sin sorpresas ni costes ocultos.',
  },
  {
    number: '03',
    title: 'Pre-configuración en taller',
    description:
      'Preparamos, ensamblamos y programamos todos los dispositivos en nuestro taller antes de acudir a la obra, minimizando el tiempo de instalación.',
  },
  {
    number: '04',
    title: 'Instalación y puesta en marcha',
    description:
      'Montamos sensores y equipos, verificamos las comunicaciones y ajustamos todos los parámetros hasta que el sistema funcione perfectamente.',
  },
  {
    number: '05',
    title: 'Formación y entrega',
    description:
      'Te explicamos cómo usar el sistema e instalamos las aplicaciones de control en tus dispositivos móviles. Listo para usar desde el primer día.',
  },
  {
    number: '06',
    title: 'Soporte y mantenimiento',
    description:
      'Ofrecemos contratos de mantenimiento preventivo, atención a incidencias y actualizaciones para que tu sistema siempre esté al día.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#1a2b6d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Cómo trabajamos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Proceso sin complicaciones
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Nos encargamos de todo para que tú solo tengas que disfrutar de tu nuevo hogar
            inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="text-6xl font-extrabold text-white/8 absolute top-5 right-6 select-none group-hover:text-white/15 transition-colors">
                {number}
              </div>
              <div className="text-red-500 font-bold text-sm mb-4">{number}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
