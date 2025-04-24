import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PrimerosPasosPage() {
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
            PRIMEROS PASOS EN <span className="text-secondary">R.E.P.O.</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Todo lo que necesitas saber para comenzar tu aventura en el terrorífico mundo de R.E.P.O.
          </p>
        </div>
        
        {/* Main content */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-horror text-3xl font-bold mb-4 text-white tracking-wider">Guía para principiantes</h2>
              <p className="text-xl text-gray-300 max-w-3xl">
                Aprende los conceptos básicos para sobrevivir en tus primeras horas de juego.
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
                      <a href="#instalacion" className="text-gray-300 hover:text-secondary transition-colors">Instalación</a>
                    </li>
                    <li>
                      <a href="#controles" className="text-gray-300 hover:text-secondary transition-colors">Controles básicos</a>
                    </li>
                    <li>
                      <a href="#primeros-minutos" className="text-gray-300 hover:text-secondary transition-colors">Primeros minutos</a>
                    </li>
                    <li>
                      <a href="#inventario" className="text-gray-300 hover:text-secondary transition-colors">Sistema de inventario</a>
                    </li>
                    <li>
                      <a href="#combate" className="text-gray-300 hover:text-secondary transition-colors">Nociones de combate</a>
                    </li>
                    <li>
                      <a href="#guardado" className="text-gray-300 hover:text-secondary transition-colors">Puntos de guardado</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-2">
                <section id="instalacion" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Instalación</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-6">
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Requisitos del sistema</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-200 mb-2">Mínimos:</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          <li>Sistema: Windows 10</li>
                          <li>Procesador: Core i5 6600</li>
                          <li>Memoria: 8 GB RAM</li>
                          <li>Gráficos: GTX 970</li>
                          <li>Almacenamiento: 1 GB disponible</li>
                          <li>DirectX: Versión 10</li>
                          <li>Red: Conexión de banda ancha a Internet</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-200 mb-2">Recomendados:</h4>
                        <ul className="list-disc pl-5 text-gray-300 space-y-1">
                          <li>Sistema: Windows 11</li>
                          <li>Procesador: Intel Core i7 8700</li>
                          <li>Memoria: 8 GB RAM</li>
                          <li>Gráficos: GTX 1070</li>
                          <li>Almacenamiento: 1 GB disponible</li>
                          <li>DirectX: Versión 12</li>
                          <li>Red: Conexión de banda ancha a Internet</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-4 text-white">Proceso de instalación</h3>
                    <ol className="list-decimal pl-5 text-gray-300 space-y-2 mb-4">
                      <li>Adquiere R.E.P.O. a través de tu plataforma preferida (Steam, Epic Games, etc.)</li>
                      <li>Descarga el instalador (aproximadamente 1 GB)</li>
                      <li>Ejecuta el instalador y sigue las instrucciones en pantalla</li>
                      <li>Una vez completada la instalación, inicia el juego</li>
                      <li>Configura tus ajustes gráficos y de audio según tu sistema</li>
                    </ol>
                    
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo:</strong> Para la mejor experiencia, instala R.E.P.O. en un SSD para reducir los tiempos de carga y mejorar el rendimiento general.
                    </div>
                  </div>
                </section>
                
                {/* Add more sections here */}
                <section id="controles" className="mb-12">
                  <h2 className="font-horror text-2xl font-bold mb-6 text-secondary tracking-wider">Controles básicos</h2>
                  
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300 mb-4">
                      Familiarízate con los controles básicos para moverte por el terrorífico mundo de R.E.P.O.:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h4 className="font-bold text-gray-200 mb-2">Movimiento:</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">W A S D</span> Movimiento del personaje</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Shift</span> Correr (consume resistencia)</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Ctrl</span> Agacharse</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Espacio</span> Saltar</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">C</span> Alternar entre agacharse/ponerse de pie</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h4 className="font-bold text-gray-200 mb-2">Interacción:</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">E</span> Interactuar/Recoger objetos</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">F</span> Linterna (encender/apagar)</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Q</span> Acción rápida/Habilidad especial</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">R</span> Recargar arma</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">T</span> Usar objeto de curación</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h4 className="font-bold text-gray-200 mb-2">Combate:</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Clic Izq</span> Atacar/Disparar</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Clic Der</span> Apuntar/Bloquear</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">1-4</span> Seleccionar arma/herramienta</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">V</span> Ataque cuerpo a cuerpo</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Z</span> Esquivar</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                        <h4 className="font-bold text-gray-200 mb-2">Interfaz:</h4>
                        <ul className="text-gray-300 space-y-2">
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Tab</span> Inventario</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">M</span> Mapa (si disponible)</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">J</span> Diario/Notas</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">Esc</span> Menú de pausa</li>
                          <li><span className="inline-block w-16 font-mono bg-dark-300 px-2 py-1 rounded text-center mr-2">P</span> Menú de habilidades</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                      <strong className="text-secondary">Consejo:</strong> Puedes personalizar los controles desde el menú de opciones. Encuentra la configuración que mejor se adapte a tu estilo de juego.
                    </div>
                  </div>
                </section>
                
                {/* Continue with other sections */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-lg border border-secondary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">¿LISTO PARA SOBREVIVIR?</h2>
            <p className="text-gray-300 mb-6">
              Ahora que conoces los conceptos básicos, es hora de adentrarte en el terrorífico mundo de R.E.P.O.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/guias/jugadores" className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-md transition-colors">
                Ver guías avanzadas
              </Link>
              <Link href="/entidades" className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-secondary border border-secondary/30 rounded-md transition-colors">
                Conocer las entidades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}