import { Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1a42] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/Logo.png" alt="Innova Systems" className="h-12 w-auto mb-5" />
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Diseño, instalación y mantenimiento de sistemas domóticos en Castellón.
              Tecnología inteligente para hogares y empresas.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5">Servicios</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              {[
                'Automatización del hogar',
                'Seguridad y alarmas',
                'Eficiencia energética',
                'Videovigilancia',
                'Redes e infraestructura',
                'Mantenimiento',
              ].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5">Empresa</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              {[
                { label: 'Sobre nosotros', href: '#nosotros' },
                { label: 'El equipo', href: '#equipo' },
                { label: 'Proceso', href: '#proceso' },
                { label: 'Paquetes', href: '#paquetes' },
                { label: 'Contacto', href: '#contacto' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {year} Innova Systems S.L. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs">Castellón, España</p>
        </div>
      </div>
    </footer>
  );
}
