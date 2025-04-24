import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SecretosPage() {
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
            SECRETOS Y <span className="text-secondary">EASTER EGGS</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Descubre los secretos mejor guardados, referencias ocultas y easter eggs que los desarrolladores escondieron en R.E.P.O.
          </p>
          <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
            <strong className="text-secondary">¡ADVERTENCIA DE SPOILERS!</strong> Esta sección contiene revelaciones importantes sobre el juego. Se recomienda explorarla solo después de completar la historia principal.
          </div>
        </div>
        
        {/* Main content */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-horror text-3xl font-bold mb-4 text-white tracking-wider">Guía de Secretos</h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Todo lo que está oculto a simple vista en el terrorífico mundo de R.E.P.O.
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
                      <a href="#areas-secretas" className="text-gray-300 hover:text-secondary transition-colors">Áreas secretas</a>
                    </li>
                    <li>
                      <a href="#objetos-ocultos" className="text-gray-300 hover:text-secondary transition-colors">Objetos ocultos</a>
                    </li>
                    <li>
                      <a href="#easter-eggs" className="text-gray-300 hover:text-secondary transition-colors">Easter eggs</a>
                    </li>
                    <li>
                      <a href="#finales-alternativos" className="text-gray-300 hover:text-secondary transition-colors">Finales alternativos</a>
                    </li>
                    <li>
                      <a href="#referencias" className="text-gray-300 hover:text-secondary transition-colors">Referencias a otros juegos</a>
                    </li>
                    <li>
                      <a href="#logros" className="text-gray-300 hover:text-secondary transition-colors">Logros secretos</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-2">
                <section id="areas-secretas" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Áreas secretas</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-6">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Laboratorio subterráneo</h3>
                    <p className="text-gray-300 mb-4">
                      Debajo del complejo principal se encuentra un laboratorio secreto donde se realizaron los primeros experimentos.
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Ubicación: En el sótano del edificio principal, busca una pared agrietada cerca de los generadores.</li>
                      <li>Cómo acceder: Necesitarás la palanca reforzada que se encuentra en el taller de mantenimiento.</li>
                      <li>Recompensa: Documentos clasificados sobre el origen del proyecto y un kit de mejora de armas nivel 3.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo:</strong> Visita esta área después de obtener la linterna mejorada, ya que gran parte del laboratorio está a oscuras.
                    </div>
                  </div>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Bunker de emergencia</h3>
                    <p className="text-gray-300 mb-4">
                      Un bunker oculto diseñado para los altos mandos en caso de contención fallida.
                    </p>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Ubicación: En el bosque norte, cerca del lago contaminado.</li>
                      <li>Cómo acceder: Necesitas encontrar las coordenadas en la oficina del director y luego seguir el mapa.</li>
                      <li>Recompensa: Munición especial, suministros médicos avanzados y una grabación que revela parte del final alternativo.</li>
                    </ul>
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo:</strong> Prepárate bien antes de explorar esta zona, ya que está fuertemente custodiada por una variante especial de entidad.
                    </div>
                  </div>
                </section>
                
                <section id="objetos-ocultos" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Objetos ocultos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Armas y herramientas especiales</h3>
                    
                    <div className="space-y-6">
                      <div className="border-b border-dark-400 pb-6">
                        <h4 className="font-bold text-gray-200 mb-2">Lanzador experimental M-7</h4>
                        <p className="text-gray-300 mb-2">Un arma prototipo que dispara proyectiles de energía capaces de aturdir a múltiples entidades.</p>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-2">
                          <li>Ubicación: En una caja fuerte oculta detrás de un cuadro en la oficina de investigación.</li>
                          <li>Código de la caja: 7-3-9-1 (se encuentra en una nota en el escritorio del Dr. Mercer)</li>
                        </ul>
                      </div>
                      
                      <div className="border-b border-dark-400 pb-6">
                        <h4 className="font-bold text-gray-200 mb-2">Amuleto de contención</h4>
                        <p className="text-gray-300 mb-2">Un artefacto que reduce temporalmente la actividad paranormal en un área limitada.</p>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-2">
                          <li>Ubicación: En el altar subterráneo de la capilla abandonada.</li>
                          <li>Requisito: Debes resolver el puzzle de las velas en orden específico.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-200 mb-2">Traje de protección avanzado</h4>
                        <p className="text-gray-300 mb-2">Mejora significativamente la resistencia a daños y permite respirar en áreas contaminadas.</p>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-2">
                          <li>Ubicación: Disperso en tres partes por el complejo. El casco está en los vestuarios, el torso en el área de descontaminación, y las botas en el almacén de suministros.</li>
                          <li>Nota: Cada pieza está bloqueada con un código diferente que se encuentra en documentos clasificados.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="easter-eggs" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Easter eggs</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <div className="space-y-6">
                      <div className="border-b border-dark-400 pb-6">
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Homenajes a clásicos del terror</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>En la sala de recreación hay una máquina arcade con un minijuego inspirado en P.T.</li>
                          <li>En la biblioteca puedes encontrar libros con títulos que hacen referencia a Silent Hill, Resident Evil y Dead Space.</li>
                          <li>En la habitación 302 hay una radio que ocasionalmente emite estática, similar a la mecánica de Silent Hill.</li>
                          <li>En el laboratorio hay un póster de "The Thing" con la frase "Trust No One" escrita con sangre.</li>
                        </ul>
                      </div>
                      
                      <div className="border-b border-dark-400 pb-6">
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Referencias a los desarrolladores</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>Los nombres de los investigadores en los documentos corresponden a miembros del equipo de desarrollo.</li>
                          <li>En la cafetería hay una pizarra con un mensaje que dice "Recuerda entregar el juego a tiempo" - una broma interna del equipo.</li>
                          <li>Las fotos en los escritorios muestran al equipo durante el desarrollo del juego, pero distorsionadas.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Secretos interactivos</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>Si tocas el piano en la sala de música con la secuencia correcta (Mi-Do-La-Do-Si-Mi), se abrirá un compartimento secreto con un diario.</li>
                          <li>Mirando a través de todos los telescopios en el observatorio en una sola partida desbloquea una escena especial en los créditos.</li>
                          <li>Si examinas todos los espejos del juego, en el último aparecerá brevemente una entidad que no se encuentra en ninguna otra parte del juego.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="finales-alternativos" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Finales alternativos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300 mb-6">
                      <strong className="text-secondary">¡ADVERTENCIA!</strong> Esta sección contiene spoilers importantes sobre los finales del juego.
                    </div>
                    
                    <div className="space-y-6">
                      <div className="border-b border-dark-400 pb-6">
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Final de Contención</h3>
                        <p className="text-gray-300 mb-4">
                          Un final alternativo donde logras contener la amenaza en lugar de escapar.
                        </p>
                        <h4 className="font-bold text-gray-200 mb-2">Requisitos:</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>Encontrar todos los documentos de investigación del Dr. Harmon.</li>
                          <li>Descubrir el laboratorio subterráneo y obtener el código de anulación.</li>
                          <li>Mantener con vida a al menos 3 NPCs hasta el final del juego.</li>
                          <li>Activar el protocolo de contención en la sala de control central.</li>
                        </ul>
                      </div>
                      
                      <div className="border-b border-dark-400 pb-6">
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Final de Sacrificio</h3>
                        <p className="text-gray-300 mb-4">
                          Un final donde te sacrificas para destruir la instalación y todas las entidades.
                        </p>
                        <h4 className="font-bold text-gray-200 mb-2">Requisitos:</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>Descubrir la verdad sobre el origen de las entidades en los archivos clasificados.</li>
                          <li>Encontrar y reparar el detonador en el área de mantenimiento.</li>
                          <li>Obtener la tarjeta de acceso del director.</li>
                          <li>Activar manualmente la secuencia de autodestrucción en el núcleo de la instalación.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-display text-xl font-bold mb-4 text-white">Final Secreto: Trascendencia</h3>
                        <p className="text-gray-300 mb-4">
                          El final más difícil de conseguir, donde te fusionas con las entidades y adquieres sus poderes.
                        </p>
                        <h4 className="font-bold text-gray-200 mb-2">Requisitos:</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
                          <li>Completar el juego al menos una vez.</li>
                          <li>Encontrar los 7 fragmentos de la reliquia antigua dispersos por todo el juego.</li>
                          <li>Descifrar el códice completo en la biblioteca oculta.</li>
                          <li>Realizar el ritual en la cámara de contención durante la fase lunar correcta (visible en el observatorio).</li>
                          <li>No eliminar a ninguna entidad tipo "Vigilante" durante toda la partida.</li>
                        </ul>
                        <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                          <strong className="text-secondary">Nota:</strong> Este final desbloquea un modo de juego especial donde puedes utilizar habilidades de las entidades en partidas posteriores.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="referencias" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Referencias a otros juegos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-6">
                      Los desarrolladores de R.E.P.O. han incluido numerosos guiños a otros títulos clásicos del género de terror:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h3 className="font-display text-lg font-bold mb-3 text-white">Silent Hill</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                          <li>La radio que emite estática cuando hay entidades cerca.</li>
                          <li>El pueblo abandonado en la niebla recuerda a Silent Hill.</li>
                          <li>La enfermera desfigurada en el área del hospital es un claro homenaje.</li>
                          <li>Hay un póster de "Midwich Elementary School" en una de las aulas.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h3 className="font-display text-lg font-bold mb-3 text-white">Resident Evil</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                          <li>El sistema de combinación de hierbas es similar al de Resident Evil.</li>
                          <li>Hay un documento titulado "Informe: Virus-T" en uno de los laboratorios.</li>
                          <li>La disposición de la mansión se asemeja a la mansión Spencer.</li>
                          <li>Un NPC menciona "Jill Sandwich" en una conversación casual.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h3 className="font-display text-lg font-bold mb-3 text-white">Dead Space</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                          <li>El sistema de desmembramiento de enemigos es similar.</li>
                          <li>Hay grafitis que dicen "Make us whole again" en algunas paredes.</li>
                          <li>Una herramienta similar al cortador de plasma se puede encontrar como arma.</li>
                          <li>Hay un traje de ingeniero con un diseño similar al de Isaac Clarke.</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h3 className="font-display text-lg font-bold mb-3 text-white">Otros juegos</h3>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                          <li><strong>Amnesia:</strong> Hay secciones donde debes esconderte en armarios y evitar mirar directamente a las entidades.</li>
                          <li><strong>Outlast:</strong> La cámara con visión nocturna y las baterías limitadas.</li>
                          <li><strong>P.T.:</strong> El pasillo que se repite infinitamente en el área residencial.</li>
                          <li><strong>Alien Isolation:</strong> El sistema de sigilo y el comportamiento de algunas entidades.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="logros" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Logros secretos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-6">
                      Estos logros no aparecen en la lista hasta que los desbloqueas, y algunos requieren acciones muy específicas:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"No mires atrás" (25G)</h3>
                          <p className="text-gray-300 text-sm">Completa el capítulo 3 sin usar la cámara en ningún momento para mirar detrás de ti.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"Pacifista paranormal" (50G)</h3>
                          <p className="text-gray-300 text-sm">Completa el juego sin eliminar a ninguna entidad (solo evasión y contención).</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"Coleccionista de pesadillas" (75G)</h3>
                          <p className="text-gray-300 text-sm">Encuentra y documenta todas las variantes de entidades en el juego (incluyendo las raras).</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"Speedrunner del terror" (100G)</h3>
                          <p className="text-gray-300 text-sm">Completa el juego en menos de 3 horas en dificultad difícil o superior.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"Maestro de los finales" (150G)</h3>
                          <p className="text-gray-300 text-sm">Desbloquea todos los finales posibles del juego, incluyendo el final secreto.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"1998" (20G)</h3>
                          <p className="text-gray-300 text-sm">Completa el juego usando solo el inventario limitado (máximo 8 slots) y guardando con cintas de cassette.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start p-3 bg-dark-400/50 rounded border border-dark-400">
                        <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <span className="text-secondary text-xl">?</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">"Ellos están entre nosotros" (30G)</h3>
                          <p className="text-gray-300 text-sm">Encuentra a los 7 NPCs que en realidad son entidades disfrazadas (pista: observa sus comportamientos anormales).</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo:</strong> Algunos de estos logros son mutuamente excluyentes en una sola partida. Planifica bien tus runs si quieres conseguir el 100% de los logros.
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-lg border border-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">¿ENCONTRASTE ALGÚN SECRETO?</h2>
            <p className="text-gray-300 mb-6">
              Si has descubierto algún secreto o easter egg que no aparece en esta guía, ¡compártelo con la comunidad!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-md transition-colors">
                Unirse al Discord
              </a>
              <a href="#" className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-secondary border border-secondary/30 rounded-md transition-colors">
                Compartir descubrimiento
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}