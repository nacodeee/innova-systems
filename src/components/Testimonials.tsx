import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Instalaron todo el sistema de seguridad y automatización en mi vivienda en tiempo récord. La atención fue excelente y el sistema funciona perfecto desde el primer día.',
    author: 'Carlos M.',
    type: 'Cliente residencial, Castellón',
  },
  {
    quote:
      'Llevamos meses con el sistema instalado en nuestra tienda y el ahorro en electricidad es notable. Muy profesionales y siempre disponibles cuando surge alguna duda.',
    author: 'Laura P.',
    type: 'Propietaria de comercio, Vila-real',
  },
  {
    quote:
      'Colaboramos con ellos en un proyecto de obra nueva y la integración fue impecable. Los sensores propios que desarrollan son realmente un punto diferencial.',
    author: 'Estudio Argenta',
    type: 'Empresa de arquitectura',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Lo que dicen de nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Clientes satisfechos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, author, type }) => (
            <div
              key={author}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={32} className="text-[#1a2b6d]/20 mb-4" />
              <p className="text-slate-600 leading-relaxed mb-6 italic">"{quote}"</p>
              <div>
                <div className="font-bold text-slate-900">{author}</div>
                <div className="text-red-600 text-sm font-medium">{type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
