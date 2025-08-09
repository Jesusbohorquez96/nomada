import { MapPin, Clock, Phone, Users, Award, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-2">
            SOBRE NÓMADA
          </h2>
          <p className="text-xl text-amber-600 font-medium mb-4">
            MERCADO GASTRONÓMICO
          </p>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Un viaje culinario que fusiona sabores tradicionales con técnicas
            modernas, creando experiencias gastronómicas únicas en cada plato.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="/nomada restaurante.png"
              alt="Restaurante Nómada"
              className="w-full h-80 object-cover rounded-lg shadow-lg border border-stone-700"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              NUESTRA HISTORIA
            </h3>
            <p className="text-stone-300 mb-4">
              Nómada nació de la pasión por explorar y compartir los sabores del
              mundo. Fundado en 2018, nuestro mercado gastronómico es el
              resultado de años de viajes culinarios y la búsqueda constante de
              ingredientes excepcionales.
            </p>
            <p className="text-stone-300 mb-6">
              Cada plato cuenta una historia, cada ingrediente tiene un origen,
              y cada experiencia gastronómica es un viaje que queremos compartir
              contigo en un ambiente único y acogedor.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-amber-600" />
                <span className="text-sm text-stone-400">
                  Premio Mejor Restaurante 2023
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-400 text-center mb-8">
            NUESTROS VALORES
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-stone-800 p-6 rounded-lg border border-stone-700">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-stone-900" />
              </div>
              <h4 className="text-xl font-bold text-amber-400 mb-2">PASIÓN</h4>
              <p className="text-stone-300">
                Cada plato es preparado con amor y dedicación, utilizando
                técnicas tradicionales y modernas para crear sabores únicos.
              </p>
            </div>
            <div className="text-center bg-stone-800 p-6 rounded-lg border border-stone-700">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-stone-900" />
              </div>
              <h4 className="text-xl font-bold text-amber-400 mb-2">
                COMUNIDAD
              </h4>
              <p className="text-stone-300">
                Creemos en crear conexiones a través de la comida, reuniendo a
                personas de diferentes culturas en torno a nuestra mesa.
              </p>
            </div>
            <div className="text-center bg-stone-800 p-6 rounded-lg border border-stone-700">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-stone-900" />
              </div>
              <h4 className="text-xl font-bold text-amber-400 mb-2">CALIDAD</h4>
              <p className="text-stone-300">
                Seleccionamos cuidadosamente cada ingrediente, trabajando con
                proveedores locales para garantizar la máxima frescura y
                calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-stone-800 rounded-lg p-8 border border-stone-700">
          <h3 className="text-2xl font-bold text-amber-400 text-center mb-8">
            VISÍTANOS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-bold text-amber-400 mb-1">DIRECCIÓN</h4>
              <p className="text-stone-300 text-sm">
                Cl. 13 #13-2 a 13-126
                <br />
                Tame, Arauca
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-bold text-amber-400 mb-1">HORARIOS</h4>
              <p className="text-stone-300 text-sm">
                Lun - Dom
                <br />
                5:00 pm- 10:30 pm
              </p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <h4 className="font-bold text-amber-400 mb-1">TELÉFONO</h4>
              <p className="text-stone-300 text-sm">+57 322 245 0393</p>
            </div>
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-600 mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <h4 className="font-bold text-amber-400 mb-1">INSTAGRAM</h4>
              <a
                href="https://www.instagram.com/nomada_gastro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 text-sm hover:text-amber-500 transition-colors"
              >
                @nomada_gastro
              </a>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="mt-6">
            <h4 className="text-xl font-bold text-amber-400 text-center mb-4">
              NUESTRA UBICACIÓN
            </h4>
            <div className="w-full h-80 overflow-hidden rounded-lg mb-4 border border-stone-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.75268360828377!2d-71.72950288307091!3d6.460673000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f19.75!3m3!1m2!1s0x8e6ec72e6e3073f1%3A0x2677de1344720d2e!2sNomada%20Mercado%20Gastron%C3%B3mico!5e0!3m2!1ses!2sco!4v1691525406708!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Nómada Mercado Gastronómico"
              ></iframe>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6.4605591%2C-71.7293674"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-stone-900 font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
              >
                <MapPin className="h-5 w-5 mr-2" />
                CÓMO LLEGAR
              </a>
              <Link
                to="/reservations"
                className="bg-stone-700 hover:bg-stone-600 text-amber-400 border border-amber-500 font-bold py-3 px-6 rounded-lg flex items-center transition-colors"
              >
                <Clock className="h-5 w-5 mr-2" />
                RESERVAR MESA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
