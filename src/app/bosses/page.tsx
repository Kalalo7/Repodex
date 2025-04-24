import Link from 'next/link';
import Navbar from '@/components/Navbar';
import bosses from '@/data/bosses.json';
import SearchBar from '@/components/SearchBar';

export default function BossesPage() {
  // Group bosses by danger level
  const extremeBosses = bosses.filter(boss => boss.peligrosidad === 'Extrema');
  const highBosses = bosses.filter(boss => boss.peligrosidad === 'Alta');
  const mediumBosses = bosses.filter(boss => boss.peligrosidad === 'Media');
  const lowBosses = bosses.filter(boss => boss.peligrosidad === 'Baja');

  return (
    <main className="pt-16">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-4xl font-bold mb-6 text-white">
            ENTIDADES DE <span className="text-primary">R.E.P.O.</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Explora todas las entidades que encontrarás en el juego. Conoce sus debilidades, ubicaciones y estrategias para enfrentarlas.
          </p>
          
          <SearchBar />
        </div>
        
        {/* Danger level filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <a href="#extrema" className="px-4 py-2 bg-[#FF3333]/20 text-[#FF3333] border border-[#FF3333]/30 rounded-md hover:bg-[#FF3333]/30 transition-colors">
            Peligrosidad: Extrema ({extremeBosses.length})
          </a>
          <a href="#alta" className="px-4 py-2 bg-[#FF6600]/20 text-[#FF6600] border border-[#FF6600]/30 rounded-md hover:bg-[#FF6600]/30 transition-colors">
            Peligrosidad: Alta ({highBosses.length})
          </a>
          <a href="#media" className="px-4 py-2 bg-[#FFCC00]/20 text-[#FFCC00] border border-[#FFCC00]/30 rounded-md hover:bg-[#FFCC00]/30 transition-colors">
            Peligrosidad: Media ({mediumBosses.length})
          </a>
          <a href="#baja" className="px-4 py-2 bg-[#33CC66]/20 text-[#33CC66] border border-[#33CC66]/30 rounded-md hover:bg-[#33CC66]/30 transition-colors">
            Peligrosidad: Baja ({lowBosses.length})
          </a>
        </div>
        
        {/* Extreme danger bosses */}
        {extremeBosses.length > 0 && (
          <section id="extrema" className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 text-danger flex items-center">
              <span className="inline-block w-4 h-4 bg-danger rounded-full mr-2"></span>
              PELIGROSIDAD EXTREMA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extremeBosses.map(boss => (
                <BossCard key={boss.id} boss={boss} />
              ))}
            </div>
          </section>
        )}
        
        {/* High danger bosses */}
        {highBosses.length > 0 && (
          <section id="alta" className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 text-orange-500 flex items-center">
              <span className="inline-block w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
              PELIGROSIDAD ALTA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highBosses.map(boss => (
                <BossCard key={boss.id} boss={boss} />
              ))}
            </div>
          </section>
        )}
        
        {/* Medium danger bosses */}
        {mediumBosses.length > 0 && (
          <section id="media" className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 text-warning flex items-center">
              <span className="inline-block w-4 h-4 bg-warning rounded-full mr-2"></span>
              PELIGROSIDAD MEDIA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumBosses.map(boss => (
                <BossCard key={boss.id} boss={boss} />
              ))}
            </div>
          </section>
        )}
        
        {/* Low danger bosses */}
        {lowBosses.length > 0 && (
          <section id="baja" className="mb-16">
            <h2 className="font-display text-2xl font-bold mb-6 text-safe flex items-center">
              <span className="inline-block w-4 h-4 bg-safe rounded-full mr-2"></span>
              PELIGROSIDAD BAJA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lowBosses.map(boss => (
                <BossCard key={boss.id} boss={boss} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

// Boss card component
function BossCard({ boss }: { boss: any }) {
  const colorScheme = {
    'Baja': {
      badge: 'bg-[#33CC66]/20 text-[#33CC66] border-[#33CC66]/30',
      card: 'border-[#33CC66]',
      hover: 'hover:border-[#33CC66]/80',
    },
    'Media': {
      badge: 'bg-[#FFCC00]/20 text-[#FFCC00] border-[#FFCC00]/30',
      card: 'border-[#FFCC00]',
      hover: 'hover:border-[#FFCC00]/80',
    },
    'Alta': {
      badge: 'bg-[#FF6600]/20 text-[#FF6600] border-[#FF6600]/30',
      card: 'border-[#FF6600]',
      hover: 'hover:border-[#FF6600]/80',
    },
    'Extrema': {
      badge: 'bg-[#FF3333]/20 text-[#FF3333] border-[#FF3333]/30',
      card: 'border-[#FF3333]',
      hover: 'hover:border-[#FF3333]/80',
    }
  };
  
  const scheme = colorScheme[boss.peligrosidad as keyof typeof colorScheme] || {
    badge: 'bg-gray-800/20 text-gray-400 border-gray-700/30',
    card: 'border-gray-700',
    hover: 'hover:border-gray-700/80',
  };

  return (
    <Link 
      href={`/bosses/${boss.id}`} 
      className={`group block bg-dark-300/50 backdrop-blur-sm rounded-lg border-2 ${scheme.card} overflow-hidden transition-all duration-300 ${scheme.hover}`}
    >
      {/* Add image container */}
      {boss.image && (
        <div className="w-full h-48 relative overflow-hidden">
          <img
            src={boss.image}
            alt={boss.nombre}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{boss.nombre}</h3>
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${scheme.badge}`}>
            {boss.peligrosidad}
          </span>
        </div>
        <p className="text-gray-300 mb-4">{boss.descripcionCorta}</p>
        <p className="text-sm text-gray-400">
          <span className="font-semibold">Ubicación:</span> {boss.ubicacion}
        </p>
      </div>
    </Link>
  );
}