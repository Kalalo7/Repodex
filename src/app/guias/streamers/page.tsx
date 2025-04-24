import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function StreamersGuidesPage() {
  return (
    <main className="pt-16 bg-dark-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link href="/guias" className="inline-flex items-center text-primary hover:text-white mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a Guías
        </Link>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-horror text-4xl font-bold mb-6 text-white tracking-wider">
            GUÍAS PARA <span className="text-secondary">STREAMERS</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Recursos específicos para creadores de contenido que quieran transmitir R.E.P.O. y maximizar la experiencia para sus espectadores.
          </p>
        </div>
        
        {/* Featured streamer guide */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-horror text-3xl font-bold mb-4 text-white tracking-wider">Guía Completa para Streamers de R.E.P.O.</h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Todo lo que necesitas saber para crear transmisiones exitosas y aterradoras de R.E.P.O.
              </p>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#9333EA" d="M45.7,-77.2C58.9,-69.2,69.2,-55.3,76.9,-40.5C84.7,-25.7,89.9,-9.9,87.6,4.8C85.3,19.5,75.4,33.1,64.3,44.6C53.2,56.1,40.8,65.6,26.9,70.8C13,76.1,-2.4,77.1,-17.7,74.3C-33,71.5,-48.2,64.9,-59.4,53.9C-70.6,42.9,-77.8,27.5,-80.9,10.8C-84,-5.9,-83,-24,-75.8,-38.7C-68.6,-53.4,-55.2,-64.7,-40.8,-72C-26.4,-79.3,-11,-82.6,3.2,-87.7C17.3,-92.8,32.5,-85.2,45.7,-77.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Table of contents */}
              <div className="lg:col-span-1">
                <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 sticky top-24">
                  <h3 className="font-horror text-xl font-bold mb-4 text-secondary tracking-wider">Contenido</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#configuracion" className="text-gray-300 hover:text-secondary transition-colors">Configuración técnica</a>
                    </li>
                    <li>
                      <a href="#atmosfera" className="text-gray-300 hover:text-secondary transition-colors">Creando atmósfera</a>
                    </li>
                    <li>
                      <a href="#interaccion" className="text-gray-300 hover:text-secondary transition-colors">Interacción con espectadores</a>
                    </li>
                    <li>
                      <a href="#sustos" className="text-gray-300 hover:text-secondary transition-colors">Maximizando los sustos</a>
                    </li>
                    <li>
                      <a href="#multijugador" className="text-gray-300 hover:text-secondary transition-colors">Streams multijugador</a>
                    </li>
                    {/* Removed overlay link from table of contents */}
                  </ul>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-2">
                <section id="configuracion" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Configuración técnica</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-6">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Configuración de audio</h3>
                    <p className="text-gray-300 mb-4">
                      El audio es crucial para la experiencia de terror en R.E.P.O. Configura tu sistema de la siguiente manera:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Usa auriculares de calidad para captar todos los sonidos ambientales y pistas de audio sutiles.</li>
                      <li>Configura un micrófono separado para tu voz, evitando que el audio del juego se filtre.</li>
                      <li>Ajusta el balance para que los espectadores puedan escuchar claramente tanto el juego como tus reacciones.</li>
                      <li>Considera usar un compresor de audio para evitar que tus gritos saturen el micrófono.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Configura un atajo de teclado para silenciar rápidamente tu micrófono durante momentos de concentración o si necesitas hacer una pausa.
                    </div>
                  </div>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Configuración de video</h3>
                    <p className="text-gray-300 mb-4">
                      Para transmitir R.E.P.O. efectivamente, considera estos ajustes de video:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Juega en resolución nativa para maximizar la calidad visual.</li>
                      <li>Ajusta el brillo del juego ligeramente más bajo que lo que usarías normalmente para aumentar la tensión.</li>
                      <li>Configura tu cámara web en un lugar donde la iluminación sea tenue pero visible.</li>
                      <li>Considera usar una luz de acento roja o púrpura para crear ambiente sin arruinar la visibilidad.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Configura escenas alternativas en OBS/Streamlabs para momentos específicos, como una escena de "susto" que se active con un atajo de teclado cuando ocurra algo aterrador.
                    </div>
                  </div>
                </section>
                
                <section id="atmosfera" className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Creando atmósfera</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      La atmósfera es clave para transmitir el terror de R.E.P.O. a tus espectadores:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Juega en una habitación oscura o con iluminación mínima.</li>
                      <li>Evita distracciones en segundo plano que puedan romper la inmersión.</li>
                      <li>Considera usar luces LED que cambien de color según la situación del juego.</li>
                      <li>Mantén un tono de voz más bajo y calmado durante la exploración para amplificar el contraste con los momentos de susto.</li>
                      <li>No sobrerreacciones artificialmente; las reacciones genuinas son más efectivas y valoradas por la audiencia.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Integra dispositivos como Philips Hue o Nanoleaf que puedan sincronizarse con el juego para cambiar la iluminación de tu habitación según lo que ocurra en pantalla.
                    </div>
                  </div>
                </section>
                
                <section id="interaccion" className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Interacción con espectadores</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      Balancear la interacción con el chat mientras mantienes la tensión del juego:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Establece momentos específicos para interactuar con el chat, como cuando estás en zonas seguras.</li>
                      <li>Advierte a tus espectadores que durante momentos intensos podrías no responder inmediatamente.</li>
                      <li>Considera usar comandos personalizados para que los espectadores puedan obtener información sobre el juego sin interrumpirte.</li>
                      <li>Implementa alertas de suscripción/donación sutiles que no rompan la inmersión durante momentos críticos.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Configura un "modo terror" en tu stream donde las alertas se silencien temporalmente durante secuencias intensas, y luego agradece a los nuevos suscriptores/donantes cuando estés en un momento seguro.
                    </div>
                  </div>
                </section>
                
                <section id="sustos" className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Maximizando los sustos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      R.E.P.O. está diseñado para provocar sustos. Aprovecha estos momentos:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>No anticipes los sustos si ya conoces el juego; permite que la experiencia sea genuina.</li>
                      <li>Configura un atajo para cambiar rápidamente a una escena de cámara completa durante reacciones intensas.</li>
                      <li>Después de un susto importante, tómate un momento para procesar y comentar lo sucedido con tu audiencia.</li>
                      <li>Crea clips de tus mejores reacciones para compartir en redes sociales después del stream.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Considera usar una cámara secundaria con un ángulo diferente que capture mejor tus reacciones durante los momentos de susto.
                    </div>
                  </div>
                </section>
                
                <section id="multijugador" className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Streams multijugador</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      Jugar R.E.P.O. con otros streamers puede crear momentos memorables:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Coordina con tus compañeros para usar configuraciones de audio similares.</li>
                      <li>Establece reglas claras sobre spoilers si alguno ya ha jugado antes.</li>
                      <li>Considera usar un layout que muestre las cámaras de todos los participantes.</li>
                      <li>Asigna roles específicos a cada jugador para crear una dinámica interesante.</li>
                      <li>Planifica sesiones de duración moderada (2-3 horas) para mantener la energía y el interés.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo Pro:</strong> Utiliza herramientas como Squad Stream en Twitch para que los espectadores puedan ver todas las perspectivas simultáneamente.
                    </div>
                  </div>
                </section>
                
                <section id="comunidad" className="mb-12">
                  <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Construyendo comunidad</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      Estrategias para construir una comunidad alrededor de tus streams de R.E.P.O.:
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Crea un canal de Discord dedicado a R.E.P.O. donde los espectadores puedan compartir sus experiencias.</li>
                      <li>Organiza noches de juego multijugador con tus suscriptores.</li>
                      <li>Realiza concursos de teorías sobre la historia del juego.</li>
                      <li>Comparte clips y momentos destacados en redes sociales con hashtags relevantes.</li>
                      <li>Colabora con otros streamers para crear contenido conjunto y ampliar tu audiencia.</li>
                    </ul>
                    
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300 mb-6">
                      <strong className="text-secondary">Consejo Pro:</strong> Crea un rol especial en tu Discord para aquellos que hayan sobrevivido a una sesión completa de R.E.P.O. en tu stream.
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Hashtags recomendados</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOGame</span>
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOSurvivors</span>
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOHorror</span>
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOLive</span>
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOEntities</span>
                      <span className="px-3 py-1 bg-dark-400/50 rounded-full text-secondary text-sm">#REPOScares</span>
                    </div>
                    
                    {/* Removed "Streamers populares de R.E.P.O." subsection */}
                  </div>
                </section>
                
                {/* Removed recursos descargables section */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-lg border border-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">¿Eres un streamer de R.E.P.O.?</h2>
            <p className="text-gray-300 mb-6">
              Comparte tus streams con nosotros usando el hashtag #REPOStreamer y podrías ser destacado en nuestras redes sociales y en esta página.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-md transition-colors">
                Compartir mi stream
              </a>
              <a href="#" className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-secondary border border-secondary/30 rounded-md transition-colors">
                Unirse al programa de afiliados
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}