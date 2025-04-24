'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import gameItems from '@/data/gameItems.json';
import Image from 'next/image';

export default function ObjetosPage() {
  const [activeCategory, setActiveCategory] = useState("Armas");
  
  // Encontrar la categoría activa
  const currentCategory = gameItems.categorias.find(cat => cat.nombre === activeCategory);
  
  // Obtener objetos destacados priorizando los que tienen imágenes
  const getFeaturedItems = () => {
    if (!currentCategory) return [];
    
    if (activeCategory === "Armas" || activeCategory === "Herramientas" || activeCategory === "Lanzables") {
      // Para las categorías de armas, herramientas y lanzables, mostrar específicamente los objetos con imágenes
      const itemsWithImages = currentCategory.objetos.filter(item => item.imagen);
      return itemsWithImages.slice(0, 3);
    } else {
      // Para otras categorías, mantener el comportamiento original
      return currentCategory.objetos.slice(0, 3);
    }
  };
  
  const featuredItems = getFeaturedItems();
  
  return (
    <main className="pt-16 bg-dark-200 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto mb-12">
          <h1 className="font-horror text-4xl font-bold mb-6 text-white tracking-wider">
            OBJETOS DE <span className="text-secondary">R.E.P.O.</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Guía completa de todos los objetos disponibles en el juego, sus precios y funcionalidades.
          </p>
        </div>
        
        {/* Pestañas de categorías */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {gameItems.categorias.map((categoria) => (
              <button
                key={categoria.nombre}
                onClick={() => setActiveCategory(categoria.nombre)}
                className={`px-4 py-2 rounded-t-lg font-horror tracking-wide transition-colors ${
                  activeCategory === categoria.nombre
                    ? "bg-dark-300 text-secondary border-b-2 border-secondary"
                    : "bg-dark-400/50 text-gray-400 hover:text-gray-200"
                }`}
              >
                {categoria.nombre.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="h-px bg-dark-400 w-full"></div>
        </div>
        
        {/* Objetos destacados con imágenes */}
        <div className="mb-8">
          <h2 className="font-horror text-2xl font-bold mb-6 text-white tracking-wider">
            OBJETOS DESTACADOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden hover:border-secondary transition-colors"
              >
                <div className="p-4 border-b border-dark-400 flex justify-between items-center">
                  <h3 className="font-horror text-xl text-white tracking-wide">{item.nombre}</h3>
                  <div className="bg-secondary/20 px-3 py-1 rounded-full text-secondary text-sm font-bold">
                    ${item.precio.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-center mb-6 h-56 bg-dark-400/30 rounded-lg relative overflow-hidden group">
                    {item.imagen ? (
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        fill
                        className="object-contain p-4 rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                      />
                    ) : (
                      <div className="text-gray-500 text-sm">
                        Sin imagen disponible
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-gray-400 text-sm mb-1">Descripción:</h4>
                    <p className="text-gray-300">{item.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tabla de objetos */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-6 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold text-white tracking-wider">
              LISTA COMPLETA DE {currentCategory?.nombre.toUpperCase()}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-dark-400/70">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Precio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Descripción</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Categoría</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-400">
                {currentCategory?.objetos.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-dark-400/30" : ""}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{item.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">${item.precio.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{item.descripcion}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{currentCategory.nombre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Sección de consejos */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12 p-8">
          <h2 className="font-horror text-2xl font-bold mb-6 text-white tracking-wider">CONSEJOS SOBRE OBJETOS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
              <h3 className="font-display text-xl font-bold mb-4 text-white">Priorización de compras</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><strong className="text-white">Primero la supervivencia:</strong> Prioriza los packs de salud y las mejoras de salud/resistencia antes que las armas caras.</li>
                <li><strong className="text-white">Armas según estilo:</strong> Elige armas que se adapten a tu estilo de juego. Si prefieres el sigilo, la Pistola Tranquilizante es esencial.</li>
                <li><strong className="text-white">Mejoras estratégicas:</strong> La Mejora de Radar y la Mejora de Alcance son inversiones que te ayudarán a largo plazo.</li>
                <li><strong className="text-white">Ahorra para emergencias:</strong> Mantén siempre un fondo para comprar packs de salud cuando los necesites.</li>
              </ul>
            </div>
            
            <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
              <h3 className="font-display text-xl font-bold mb-4 text-white">Uso efectivo de objetos</h3>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><strong className="text-white">Conserva munición:</strong> Las armas de fuego son potentes pero la munición es limitada. Úsalas solo cuando sea necesario.</li>
                <li><strong className="text-white">Combina herramientas:</strong> Usa el Rastreador de Objetos Valiosos junto con C.A.R.T. para maximizar la recolección de recursos.</li>
                <li><strong className="text-white">Momento adecuado para curarse:</strong> Usa los packs de salud pequeños para heridas leves y guarda los grandes para emergencias.</li>
                <li><strong className="text-white">Mejoras complementarias:</strong> Combina la Mejora de Velocidad con la Mejora de Resistencia para maximizar tu movilidad.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-dark-400/50 rounded border border-secondary/30 text-sm text-gray-300">
            <strong className="text-secondary">CONSEJO AVANZADO:</strong> Las armas cuerpo a cuerpo como la Espada o el Bate de Béisbol no requieren munición, lo que las hace ideales para conservar recursos en partidas largas. Sin embargo, te exponen a mayor riesgo al acercarte a las entidades.
          </div>
        </div>
        
        {/* Sección de comparación - Mantenemos esta sección porque es útil */}
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden mb-12">
          <div className="p-8 border-b border-dark-400">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider">COMPARATIVA DE ARMAS</h2>
            <p className="text-gray-300">
              Análisis de las ventajas y desventajas de cada tipo de arma disponible en R.E.P.O.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-dark-400/70">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Arma</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Precio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ventajas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Desventajas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Mejor uso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-400">
                <tr className="bg-dark-400/30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Martillo Inflable</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$9.000</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Bajo costo, divertido</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Explota al golpear superficies planas, daño bajo</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Distracciones, enemigos débiles</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Espada</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$25.000</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Buen daño, no requiere munición</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Rango corto, requiere acercarse</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Combate cercano, ahorro de recursos</td>
                </tr>
                <tr className="bg-dark-400/30">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Escopeta</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$94.000</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Daño masivo a corta distancia</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Muy cara, munición limitada</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Situaciones críticas, jefes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">Pistola Tranquilizante</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">$16.000</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Duerme enemigos temporalmente</td>
                  <td className="px-6 py-4 text-sm text-gray-300">No causa daño, efecto temporal</td>
                  <td className="px-6 py-4 text-sm text-gray-300">Sigilo, escape, control de multitudes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Sección final de consejos - Mantenemos esta sección porque es útil */}
        <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-lg border border-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-horror text-2xl font-bold mb-4 text-white tracking-wider text-center">ESTRATEGIAS DE EQUIPAMIENTO</h2>
            <div className="bg-dark-400/50 p-6 rounded-lg border border-dark-400 mb-6">
              <p className="text-gray-300 mb-4">
                La combinación correcta de objetos puede marcar la diferencia entre sobrevivir o perecer en R.E.P.O. Aquí hay algunas configuraciones recomendadas:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-white mb-2">Configuración para principiantes:</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Arma principal: Bate de Béisbol (económico y efectivo)</li>
                    <li>Mejoras: Pack de Mejora de Salud, Pack de Mejora de Resistencia</li>
                    <li>Herramientas: Rastreador de Extracción</li>
                    <li>Curación: Varios Packs de Salud Pequeños</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-white mb-2">Configuración para exploración:</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Arma principal: Pistola Tranquilizante (para evitar combates)</li>
                    <li>Mejoras: Pack de Mejora de Velocidad, Pack de Mejora de Radar</li>
                    <li>Herramientas: Rastreador de Objetos Valiosos, C.A.R.T. de Bolsillo</li>
                    <li>Curación: Packs de Salud Medianos</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-bold text-white mb-2">Configuración para combate:</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    <li>Arma principal: Escopeta o Pistola</li>
                    <li>Arma secundaria: Espada (para ahorrar munición)</li>
                    <li>Mejoras: Pack de Mejora de Fuerza, Pack de Mejora de Salud</li>
                    <li>Curación: Packs de Salud Grandes</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-center">
              Recuerda adaptar tu equipamiento según la misión y los desafíos específicos que enfrentarás.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}