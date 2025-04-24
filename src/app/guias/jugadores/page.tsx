import Navbar from '@/components/Navbar';

export default function JugadoresGuidesPage() {
  return (
    <main className="pt-16 bg-dark-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-horror text-4xl font-bold mb-6 text-white tracking-wider">
            GUÍA PARA <span className="text-secondary">NUEVOS JUGADORES</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Consejos básicos y estrategias esenciales para sobrevivir a tus primeras horas en R.E.P.O.
          </p>
        </div>
        
        {/* Introduction section */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12 p-8">
          <h2 className="font-horror text-2xl font-bold mb-6 text-white tracking-wider">PRIMEROS PASOS</h2>
          <p className="text-gray-300 mb-6">
            R.E.P.O. es un juego de supervivencia y horror que pone a prueba tus nervios y habilidades. 
            A diferencia de otros juegos, aquí la paciencia y la observación son más importantes que los reflejos rápidos. 
            Esta guía te ayudará a sobrevivir a tus primeras horas de juego.
          </p>
          
          <div className="p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300 mb-6">
            <strong className="text-secondary">CONSEJO PRINCIPAL:</strong> La muerte en R.E.P.O. es permanente en las dificultades más altas. 
            Comienza en dificultad normal para familiarizarte con los sistemas del juego antes de enfrentarte a mayores desafíos.
          </div>
        </div>
        
        {/* Configuration section */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">CONFIGURACIÓN ÓPTIMA</h2>
            <p className="text-gray-300">
              Antes de comenzar tu aventura, es crucial configurar correctamente los controles y ajustes gráficos.
            </p>
          </div>
          
          <div className="p-8">
            <h3 className="font-display text-xl font-bold mb-4 text-white">Sensibilidad del ratón</h3>
            <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400 mb-6">
              <p className="text-gray-300 mb-4">
                La configuración correcta del ratón puede marcar la diferencia entre la vida y la muerte:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><strong className="text-white">Sensibilidad recomendada:</strong> Entre 400-800 DPI con una sensibilidad en juego de 0.3-0.5.</li>
                <li><strong className="text-white">Movimientos amplios:</strong> Usa una alfombrilla grande para permitir movimientos amplios del brazo, crucial para mirar rápidamente a tu alrededor.</li>
                <li><strong className="text-white">Desactiva la aceleración del ratón:</strong> Esto garantiza que tus movimientos sean consistentes y predecibles.</li>
                <li><strong className="text-white">Prueba en el tutorial:</strong> Ajusta la sensibilidad en la zona segura del tutorial antes de aventurarte.</li>
              </ul>
            </div>
            
            <h3 className="font-display text-xl font-bold mb-4 text-white">Ajustes gráficos y de audio</h3>
            <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Gráficos</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Prioriza los FPS sobre la calidad visual para reaccionar más rápido.</li>
                    <li>Configura el brillo ligeramente por encima del recomendado para ver mejor en zonas oscuras.</li>
                    <li>Desactiva el motion blur para mejorar la visibilidad durante movimientos rápidos.</li>
                    <li>Activa la opción "Resaltar objetos interactuables" para no perderte elementos importantes.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Audio</h4>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Usa auriculares para detectar la dirección de los sonidos.</li>
                    <li>Aumenta el volumen de efectos de sonido y reduce la música para oír mejor a las entidades.</li>
                    <li>Activa el audio 3D si tu equipo lo soporta.</li>
                    <li>Configura el volumen maestro a un nivel cómodo pero alto para detectar sonidos sutiles.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Survival tips section */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">CONSEJOS DE SUPERVIVENCIA BÁSICOS</h2>
            <p className="text-gray-300">
              Estos consejos te mantendrán con vida durante tus primeras horas de juego.
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Gestión de recursos</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-3">
                  <li><strong className="text-white">No desperdicies munición:</strong> Cada bala es valiosa. Usa el sigilo siempre que sea posible.</li>
                  <li><strong className="text-white">Prioriza los packs de salud:</strong> Guarda los packs grandes para emergencias y usa los pequeños para heridas menores.</li>
                  <li><strong className="text-white">Organiza tu inventario:</strong> Mantén los objetos esenciales (munición, packs de salud) en slots de acceso rápido.</li>
                  <li><strong className="text-white">Recoge todo:</strong> Incluso los objetos aparentemente inútiles pueden ser cruciales para craftear más adelante.</li>
                  <li><strong className="text-white">Conserva las baterías:</strong> Apaga la linterna cuando no sea absolutamente necesaria.</li>
                </ul>
              </div>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Movimiento y exploración</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-3">
                  <li><strong className="text-white">Camina, no corras:</strong> Correr genera ruido que atrae a las entidades. Camina siempre que puedas.</li>
                  <li><strong className="text-white">Mira hacia arriba:</strong> Muchos jugadores olvidan mirar al techo, donde pueden acechar peligros.</li>
                  <li><strong className="text-white">Usa la función de asomarse:</strong> Asómate por las esquinas antes de avanzar para evitar emboscadas.</li>
                  <li><strong className="text-white">Memoriza rutas de escape:</strong> Siempre ten en mente una ruta de escape en caso de emergencia.</li>
                  <li><strong className="text-white">Marca las áreas exploradas:</strong> Usa el mapa para marcar zonas ya exploradas y recursos para recoger más tarde.</li>
                </ul>
              </div>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Combate y entidades</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-3">
                  <li><strong className="text-white">Apunta a la cabeza:</strong> Los disparos a la cabeza causan más daño a la mayoría de entidades.</li>
                  <li><strong className="text-white">Aprende los patrones:</strong> Cada entidad tiene patrones de movimiento y ataque predecibles.</li>
                  <li><strong className="text-white">Usa el entorno:</strong> Aprovecha objetos como botellas para crear distracciones.</li>
                  <li><strong className="text-white">No te enfrentes a múltiples enemigos:</strong> Intenta atraerlos de uno en uno.</li>
                  <li><strong className="text-white">Conoce tus armas:</strong> Cada arma tiene ventajas y desventajas. Familiarízate con todas.</li>
                </ul>
              </div>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-xl font-bold mb-4 text-white">Resistencia y estado físico</h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-3">
                  <li><strong className="text-white">Gestiona tu resistencia:</strong> Correr y realizar acciones físicas agota tu barra de resistencia. Descansa cuando sea seguro.</li>
                  <li><strong className="text-white">Mantén tu salud al máximo:</strong> No esperes a estar casi muerto para usar un pack de salud.</li>
                  <li><strong className="text-white">Reconoce los síntomas de daño:</strong> La pantalla se vuelve más roja y la visión borrosa cuando tu salud es baja.</li>
                  <li><strong className="text-white">Descansa en zonas seguras:</strong> Las áreas de descanso te permiten recuperar salud y guardar progreso.</li>
                  <li><strong className="text-white">Evita el daño por caída:</strong> Las caídas desde altura pueden causar daño significativo o incluso muerte instantánea.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Common mistakes section */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">ERRORES COMUNES DE PRINCIPIANTES</h2>
            <p className="text-gray-300">
              Evita estos errores que cometen la mayoría de los nuevos jugadores.
            </p>
          </div>
          
          <div className="p-8">
            <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
              <ul className="list-disc pl-5 text-gray-300 space-y-4">
                <li>
                  <strong className="text-white">Correr constantemente:</strong> 
                  El ruido atrae a las entidades. Camina siempre que sea posible y corre solo cuando sea absolutamente necesario.
                </li>
                <li>
                  <strong className="text-white">Desperdiciar munición:</strong> 
                  No dispares a menos que estés seguro de acertar. Cada bala desperdiciada puede significar tu muerte más adelante.
                </li>
                <li>
                  <strong className="text-white">Ignorar los sonidos ambientales:</strong> 
                  Los sonidos sutiles pueden advertirte de peligros cercanos. Juega con auriculares y presta atención.
                </li>
                <li>
                  <strong className="text-white">No guardar recursos para jefes:</strong> 
                  Guarda algunos recursos de alta calidad para los enfrentamientos con jefes y situaciones críticas.
                </li>
                <li>
                  <strong className="text-white">Explorar sin planificación:</strong> 
                  Siempre ten un objetivo claro y una ruta de escape planificada antes de explorar nuevas áreas.
                </li>
                <li>
                  <strong className="text-white">Ignorar los sonidos de alerta:</strong> 
                  El juego proporciona indicadores sonoros sutiles cuando hay peligro cerca. Aprende a reconocerlos.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Controls reference section */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">CONTROLES ESENCIALES</h2>
            <p className="text-gray-300">
              Domina estos controles para mejorar tus posibilidades de supervivencia.
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-lg font-bold mb-4 text-white">Movimiento y exploración</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><strong className="text-white">WASD:</strong> Movimiento básico</li>
                  <li><strong className="text-white">Shift:</strong> Correr (consume resistencia)</li>
                  <li><strong className="text-white">Ctrl:</strong> Agacharse (reduce el ruido)</li>
                  <li><strong className="text-white">C:</strong> Cambiar a postura de sigilo</li>
                  <li><strong className="text-white">E:</strong> Interactuar con objetos</li>
                  <li><strong className="text-white">F:</strong> Encender/apagar linterna</li>
                  <li><strong className="text-white">Q/E (mantener):</strong> Asomarse por esquinas</li>
                  <li><strong className="text-white">Espacio:</strong> Saltar (úsalo con moderación, hace ruido)</li>
                </ul>
              </div>
              
              <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                <h3 className="font-display text-lg font-bold mb-4 text-white">Combate y supervivencia</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><strong className="text-white">Clic izquierdo:</strong> Atacar/Disparar</li>
                  <li><strong className="text-white">Clic derecho:</strong> Apuntar/Bloquear</li>
                  <li><strong className="text-white">R:</strong> Recargar arma</li>
                  <li><strong className="text-white">1-5:</strong> Selección rápida de objetos</li>
                  <li><strong className="text-white">Tab:</strong> Abrir inventario</li>
                  <li><strong className="text-white">M:</strong> Abrir mapa</li>
                  <li><strong className="text-white">H:</strong> Usar objeto curativo</li>
                  <li><strong className="text-white">X:</strong> Examinar objeto en detalle</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
              <strong className="text-secondary">CONSEJO AVANZADO:</strong> Puedes personalizar los controles en el menú de opciones. 
              Configúralos de manera que las acciones más importantes sean fácilmente accesibles para tu estilo de juego.
            </div>
          </div>
        </div>
        
        {/* Final tips section */}
        <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-lg border border-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider text-center">CONSEJOS FINALES</h2>
            <div className="bg-dark-400/50 p-6 rounded-lg border border-dark-400 mb-6">
              <ul className="list-disc pl-5 text-gray-300 space-y-3">
                <li>
                  <strong className="text-white">Tómate tu tiempo:</strong> 
                  R.E.P.O. no es un juego de acción rápida. La paciencia es tu mejor aliada.
                </li>
                <li>
                  <strong className="text-white">Aprende de cada muerte:</strong> 
                  Cada vez que mueras, reflexiona sobre qué salió mal y cómo evitarlo la próxima vez.
                </li>
                <li>
                  <strong className="text-white">Experimenta:</strong> 
                  No tengas miedo de probar diferentes enfoques y estrategias.
                </li>
                <li>
                  <strong className="text-white">Disfruta de la atmósfera:</strong> 
                  El miedo es parte de la experiencia. Sumérgete en el ambiente y la historia.
                </li>
                <li>
                  <strong className="text-white">Descansa:</strong> 
                  Si te sientes frustrado, toma un descanso. Volver con la mente fresca puede marcar la diferencia.
                </li>
              </ul>
            </div>
            <p className="text-gray-300 text-center">
              Recuerda: En R.E.P.O., la supervivencia no se trata solo de fuerza, sino de inteligencia, paciencia y adaptabilidad.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}