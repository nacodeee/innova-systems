import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'residencial' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Solicita tu presupuesto gratuito
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Cuéntanos tu proyecto y nos ponemos en contacto contigo en menos de 24 horas para
            organizar una visita sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-[#1a2b6d]/10 rounded-xl p-3 flex-shrink-0">
                <MapPin size={22} className="text-[#1a2b6d]" />
              </div>
              <div>
                <div className="font-bold text-slate-900 mb-1">Ubicación</div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Provincia de Castellón, España.<br />
                  Servicio en toda la comunidad valenciana.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-red-50 rounded-xl p-3 flex-shrink-0">
                <Mail size={22} className="text-red-600" />
              </div>
              <div>
                <div className="font-bold text-slate-900 mb-1">Email</div>
                <a href="mailto:info@innovasystems.es" className="text-slate-500 text-sm hover:text-red-600 transition-colors">
                  info@innovasystems.es
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="bg-green-50 rounded-xl p-3 flex-shrink-0">
                <Phone size={22} className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-slate-900 mb-1">Teléfono</div>
                <a href="tel:+34600000000" className="text-slate-500 text-sm hover:text-green-600 transition-colors">
                  +34 600 000 000
                </a>
              </div>
            </div>

            <div className="bg-[#1a2b6d] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">¿Eres empresa o promotora?</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Ofrecemos condiciones especiales para estudios de arquitectura, constructoras y
                empresas de reformas. Llámanos para hablar.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={64} className="text-green-500 mb-6" />
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-500 max-w-sm">
                  Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', message: '', type: 'residencial' }); }}
                  className="mt-8 text-[#1a2b6d] font-semibold hover:underline text-sm"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30 focus:border-[#1a2b6d] transition-all placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30 focus:border-[#1a2b6d] transition-all placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 6XX XXX XXX"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30 focus:border-[#1a2b6d] transition-all placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Tipo de cliente
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30 focus:border-[#1a2b6d] transition-all text-slate-700 bg-white"
                    >
                      <option value="residencial">Particular / Residencial</option>
                      <option value="comercio">Comercio u oficina</option>
                      <option value="empresa">Empresa / Promotora</option>
                      <option value="reformas">Empresa de reformas o arquitectura</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Cuéntanos tu proyecto <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe brevemente qué necesitas o qué esperas del sistema..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2b6d]/30 focus:border-[#1a2b6d] transition-all placeholder-slate-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a2b6d] hover:bg-[#243580] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 text-sm"
                >
                  <Send size={16} />
                  Enviar solicitud de presupuesto
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Al enviar aceptas que podamos contactarte para responder a tu solicitud.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
