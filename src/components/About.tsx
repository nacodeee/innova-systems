import { Award, Target, Eye } from 'lucide-react';

const values = [
  'Innovación',
  'Seguridad',
  'Calidad',
  'Eficiencia',
  'Transparencia',
  'Mejora continua',
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/22307556/pexels-photo-22307556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Dispositivos domóticos Innova Systems"
                className="w-full h-[520px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1a2b6d] text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <div className="text-4xl font-extrabold">+10</div>
              <div className="text-white/70 text-sm mt-1">servicios domóticos disponibles</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Sobre nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Tecnología inteligente,<br />
              <span className="text-[#1a2b6d]">soluciones reales</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Innova Systems es una empresa especializada en domótica con sede en Castellón. Nos
              diferenciamos por desarrollar nuestros propios sensores y dispositivos, lo que nos
              permite adaptar cada instalación a las necesidades específicas de cada cliente.
            </p>

            {/* Mission / Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <Target size={22} className="text-red-600 mb-3" />
                <div className="font-bold text-slate-900 mb-1">Misión</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Acercar la tecnología inteligente a hogares y empresas con soluciones seguras,
                  eficientes y fáciles de usar.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <Eye size={22} className="text-[#1a2b6d] mb-3" />
                <div className="font-bold text-slate-900 mb-1">Visión</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Ser empresa de referencia en domótica e IoT, combinando instalación profesional con
                  tecnología propia.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award size={18} className="text-red-600" />
                <span className="font-bold text-slate-900">Nuestros valores</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v}
                    className="bg-[#1a2b6d]/8 text-[#1a2b6d] font-medium text-sm px-4 py-1.5 rounded-full border border-[#1a2b6d]/15"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
