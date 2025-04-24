import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import bosses from '@/data/bosses.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return bosses.map((boss) => ({
    id: boss.id,
  }));
}

export default function BossDetailPage(props: any) {
  const { params } = props;
  const boss = bosses.find((b) => b.id === params.id);

  if (!boss) {
    notFound();
  }
  
  // Find previous and next bosses for navigation
  const currentIndex = bosses.findIndex((b) => b.id === params.id);
  const prevBoss = currentIndex > 0 ? bosses[currentIndex - 1] : null;
  const nextBoss = currentIndex < bosses.length - 1 ? bosses[currentIndex + 1] : null;
  
  const dangerColors = {
    'Baja': 'bg-safe/20 text-safe border-safe/30',
    'Media': 'bg-warning/20 text-warning border-warning/30',
    'Alta': 'bg-orange-500/20 text-orange-500 border-orange-500/30',
    'Extrema': 'bg-danger/20 text-danger border-danger/30',
  };
  
  const dangerTextColors = {
    'Baja': 'text-safe',
    'Media': 'text-warning',
    'Alta': 'text-orange-500',
    'Extrema': 'text-danger',
  };

  const dangerBgColors = {
    'Baja': 'bg-safe',
    'Media': 'bg-warning',
    'Alta': 'bg-orange-500',
    'Extrema': 'bg-danger',
  };

  const dangerBorderColors = {
    'Baja': 'border-safe/60',
    'Media': 'border-warning/60',
    'Alta': 'border-orange-500/60',
    'Extrema': 'border-danger/60',
  };

  return (
    <main className="pt-16 bg-dark-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <Link href="/bosses" className="inline-flex items-center text-primary hover:text-white mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a Entidades
        </Link>
        
        <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-dark-400 relative overflow-hidden">
            <div className="relative z-10 flex flex-col items-center text-center">
              <h1 className="font-display text-4xl font-bold mb-4 text-white">{boss.nombre}</h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                {boss.peligrosidad === 'Extrema' && (
                  <span className="px-4 py-2 rounded-md text-sm font-semibold border border-red-500/30 bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                    Peligrosidad: {boss.peligrosidad}
                  </span>
                )}
                {boss.peligrosidad === 'Alta' && (
                  <span className="px-4 py-2 rounded-md text-sm font-semibold border border-orange-500/30 bg-orange-500/20 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                    Peligrosidad: {boss.peligrosidad}
                  </span>
                )}
                {boss.peligrosidad === 'Media' && (
                  <span className="px-4 py-2 rounded-md text-sm font-semibold border border-yellow-500/30 bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors">
                    Peligrosidad: {boss.peligrosidad}
                  </span>
                )}
                {boss.peligrosidad === 'Baja' && (
                  <span className="px-4 py-2 rounded-md text-sm font-semibold border border-green-500/30 bg-green-500/20 text-green-500 hover:bg-green-500 hover:text-white transition-colors">
                    Peligrosidad: {boss.peligrosidad}
                  </span>
                )}
                <span className="px-4 py-2 bg-dark-400/50 rounded-md text-sm text-gray-300">
                  ID: {boss.id}
                </span>
              </div>
              
              <p className="text-xl text-gray-300 max-w-3xl">{boss.descripcionCorta}</p>
            </div>

            {/* Updated boss image container */}
            {boss.image && (
              <div className="mt-6 flex justify-center">
                <div className="relative h-96 w-full max-w-2xl rounded-lg overflow-hidden">
                  <Image
                    src={boss.image}
                    alt={boss.nombre}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}
            
            {/* Keep the background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill={boss.peligrosidad === 'Extrema' ? '#FF3333' : 
                           boss.peligrosidad === 'Alta' ? '#FF8800' : 
                           boss.peligrosidad === 'Media' ? '#FFCC00' : '#33CC66'} 
                      d="M45.7,-77.2C58.9,-69.2,69.2,-55.3,76.9,-40.5C84.7,-25.7,89.9,-9.9,87.6,4.8C85.3,19.5,75.4,33.1,64.3,44.6C53.2,56.1,40.8,65.6,26.9,70.8C13,76.1,-2.4,77.1,-17.7,74.3C-33,71.5,-48.2,64.9,-59.4,53.9C-70.6,42.9,-77.8,27.5,-80.9,10.8C-84,-5.9,-83,-24,-75.8,-38.7C-68.6,-53.4,-55.2,-64.7,-40.8,-72C-26.4,-79.3,-11,-82.6,3.2,-87.7C17.3,-92.8,32.5,-85.2,45.7,-77.2Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left column */}
              <div>
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-primary text-center">Descripción</h2>
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300">{boss.descripcionCompleta}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-primary text-center">Ubicación</h2>
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300">{boss.ubicacion}</p>
                  </div>
                </div>
              </div>
              
              {/* Right column */}
              <div>
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-primary text-center">Debilidades</h2>
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      {boss.debilidades.map((debilidad: string, index: number) => (
                        <li key={index}>{debilidad}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold mb-4 text-primary text-center">Estrategia</h2>
                  <div className="bg-dark-400/30 p-6 rounded-lg border border-dark-400">
                    <p className="text-gray-300">{boss.estrategia}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Danger level indicator */}
            <div className={`mt-8 p-6 rounded-lg border ${
              boss.peligrosidad === 'Extrema' ? 'border-red-500/60' : 
              boss.peligrosidad === 'Alta' ? 'border-orange-500/60' : 
              boss.peligrosidad === 'Media' ? 'border-yellow-500/60' : 
              'border-green-500/60'
            } bg-dark-400/30`}>
              <h3 className="font-display text-xl font-bold mb-4 flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  boss.peligrosidad === 'Extrema' ? 'bg-red-500' : 
                  boss.peligrosidad === 'Alta' ? 'bg-orange-500' : 
                  boss.peligrosidad === 'Media' ? 'bg-yellow-500' : 
                  'bg-green-500'
                }`}></span>
                <span className={
                  boss.peligrosidad === 'Extrema' ? 'text-red-500' : 
                  boss.peligrosidad === 'Alta' ? 'text-orange-500' : 
                  boss.peligrosidad === 'Media' ? 'text-yellow-500' : 
                  'text-green-500'
                }>Nivel de Peligrosidad: {boss.peligrosidad}</span>
              </h3>
              <p className="text-gray-300">
                {boss.peligrosidad === 'Extrema' ? 'Esta entidad es extremadamente peligrosa. Evita el contacto directo a toda costa.' : 
                 boss.peligrosidad === 'Alta' ? 'Esta entidad representa un alto riesgo. Procede con extrema precaución.' : 
                 boss.peligrosidad === 'Media' ? 'Esta entidad es moderadamente peligrosa. Mantén la distancia y prepárate para defenderte.' : 
                 'Esta entidad representa un riesgo bajo. Aún así, mantén la precaución.'}
              </p>
            </div>
            
            {/* Visual indicator for game-like effect */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-dark-400/30 rounded-full border border-dark-400">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></span>
                <span className="text-xs text-gray-400">SEÑAL ACTIVA</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation between bosses */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {prevBoss ? (
            <Link 
              href={`/bosses/${prevBoss.id}`} 
              className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-primary border border-primary/30 rounded-md transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              {prevBoss.nombre}
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link 
            href="/bosses" 
            className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-primary border border-primary/30 rounded-md transition-colors text-center"
          >
            Ver todas las entidades
          </Link>
          
          {nextBoss ? (
            <Link 
              href={`/bosses/${nextBoss.id}`} 
              className="px-6 py-3 bg-dark-300 hover:bg-dark-400 text-primary border border-primary/30 rounded-md transition-colors flex items-center justify-end"
            >
              {nextBoss.nombre}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
        
        {/* Additional game-like UI element */}
        <div className="mt-8 text-center">
          <div className="inline-block px-4 py-2 bg-dark-300/70 border border-dark-400 rounded-md">
            <p className="text-xs text-gray-400 mb-1">ESTADO DEL SISTEMA</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-primary text-sm">Entidad registrada en la base de datos</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}