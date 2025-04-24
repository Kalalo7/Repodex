import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function StreamerConfigPage() {
  return (
    <main className="pt-16 bg-dark-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link href="/guias/streamers" className="inline-flex items-center text-primary hover:text-white mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a Guías para Streamers
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-6 text-white">
            Configuración para <span className="text-secondary">Streamers</span>
          </h1>
          
          <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
            <div className="p-8 border-b border-dark-400">
              <p className="text-xl text-gray-300">
                Guía completa para configurar tu stream de R.E.P.O. y ofrecer la mejor experiencia a tus espectadores.
              </p>
            </div>
            
            <div className="p-8">
              <h2 className="font-display text-2xl font-bold mb-6 text-secondary">Configuración de OBS Studio</h2>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-8">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Configuración de video</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-200 mb-2">Ajustes recomendados:</h4>
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400 font-mono text-sm text-gray-300">
                    <p>Resolución base: 1920x1080</p>
                    <p>Resolución de salida: 1280x720 (para mejor rendimiento)</p>
                    <p>FPS: 60</p>
                    <p>Filtro de escala: Lanczos</p>
                    <p>Formato de color: NV12</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-200 mb-2">Configuración de salida:</h4>
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400 font-mono text-sm text-gray-300">
                    <p>Codificador: x264 (o NVENC si tienes GPU NVIDIA)</p>
                    <p>Tasa de bits: 4500-6000 Kbps</p>
                    <p>Preset: Calidad o Rendimiento equilibrado</p>
                    <p>Perfil: high</p>
                    <p>Intervalo de keyframes: 2</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-200 mb-2">Configuración de audio:</h4>
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400 font-mono text-sm text-gray-300">
                    <p>Tasa de muestreo: 48kHz</p>
                    <p>Canales: Estéreo</p>
                    <p>Tasa de bits de audio: 160</p>
                    <p>Dispositivo de monitoreo: Auriculares</p>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                  <strong className="text-secondary">Consejo Pro:</strong> Para R.E.P.O., es crucial mantener la calidad de audio. Configura filtros de ruido para eliminar sonidos de fondo, pero no filtres demasiado o podrías perder sonidos sutiles del juego.
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4 text-white">Escenas recomendadas</h3>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-8">
                <p className="text-gray-300 mb-4">
                  Configura las siguientes escenas para una experiencia de stream óptima:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">1. Pantalla de inicio</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Imagen de fondo temática de R.E.P.O.</li>
                      <li>Cuenta regresiva para el inicio del stream</li>
                      <li>Música de ambiente de terror suave</li>
                      <li>Información del canal y redes sociales</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">2. Gameplay principal</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Captura del juego a pantalla completa</li>
                      <li>Webcam en esquina inferior (tamaño moderado)</li>
                      <li>Alertas sutiles que no interrumpan la inmersión</li>
                      <li>Chat en pantalla con estilo minimalista</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">3. Modo terror</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Similar al gameplay principal pero con webcam más grande</li>
                      <li>Sin alertas ni elementos distractores</li>
                      <li>Activar durante secuencias de terror intensas</li>
                      <li>Opcional: filtro de color rojo sutil para aumentar tensión</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">4. Descanso/Pausa</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Imagen estática o animación de "Volveré pronto"</li>
                      <li>Temporizador de cuenta regresiva (opcional)</li>
                      <li>Música de ambiente de R.E.P.O.</li>
                      <li>Chat visible para mantener interacción</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                  <strong className="text-secondary">Consejo Pro:</strong> Configura atajos de teclado para cambiar rápidamente entre escenas, especialmente para activar el "Modo terror" cuando sientas que se aproxima un susto.
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4 text-white">Configuración de iluminación</h3>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-8">
                <p className="text-gray-300 mb-4">
                  La iluminación adecuada mejorará dramáticamente la experiencia de tus espectadores:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">Iluminación recomendada</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Luz principal tenue frente a ti (no demasiado brillante)</li>
                      <li>Luz de acento roja o púrpura detrás para crear ambiente</li>
                      <li>Evitar luces brillantes que causen reflejos en la pantalla</li>
                      <li>Considerar luces LED programables (Philips Hue, Nanoleaf)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-dark-400/50 p-4 rounded border border-dark-400">
                    <h4 className="font-bold text-gray-200 mb-2">Configuración para sustos</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1 text-sm">
                      <li>Programa luces para que cambien a rojo intenso durante sustos</li>
                      <li>Considera usar un controlador MIDI para cambios rápidos</li>
                      <li>Mantén una luz mínima para que la cámara pueda captar tus reacciones</li>
                      <li>Prueba diferentes configuraciones antes de transmitir</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                  <strong className="text-secondary">Consejo Pro:</strong> Si utilizas luces inteligentes, configura una integración con tus alertas de stream para que las luces cambien cuando recibas suscripciones o donaciones.
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold mb-4 text-white">Optimización del juego</h3>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <p className="text-gray-300 mb-4">
                  Configura R.E.P.O. para obtener el mejor rendimiento durante tus streams:
                </p>
                
                <div className="bg-dark-400/50 p-4 rounded border border-dark-400 mb-6">
                  <h4 className="font-bold text-gray-200 mb-2">Configuración gráfica recomendada</h4>
                  <div className="font-mono text-sm text-gray-300">
                    <p>Resolución: Nativa (1080p recomendado)</p>
                    <p>Modo de visualización: Pantalla completa</p>
                    <p>Calidad de texturas: Alta</p>
                    <p>Efectos de post-procesado: Altos (importantes para la atmósfera)</p>
                    <p>Sombras: Medias (balance entre calidad y rendimiento)</p>
                    <p>Antialiasing: TAA</p>
                    <p>V-Sync: Desactivado (usar límite de FPS en su lugar)</p>
                    <p>Límite de FPS: 60 (para estabilidad en stream)</p>
                  </div>
                </div>
                
                <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
                  <strong className="text-secondary">Consejo Pro:</strong> Ejecuta R.E.P.O. en modo "Alto rendimiento" desde la configuración de gráficos de Windows. Cierra aplicaciones en segundo plano para evitar caídas de FPS durante momentos críticos.
                </div>
              </div>
            </div>
          </div>
          
          {/* Status indicator */}
          <div className="mt-8 text-center">
            <div className="inline-block px-4 py-2 bg-dark-300/70 border border-dark-400 rounded-md">
              <p className="text-xs text-gray-400 mb-1">ESTADO DE LA GUÍA</p>
              <div className="flex items-center justify-center space-x-2">
                <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                <span className="text-secondary text-sm">Información actualizada para la versión actual</span>
              </div>
            </div>
          </div>
          
          {/* Download resources section removed */}
        </div>
      </div>
    </main>
  );
}
                    