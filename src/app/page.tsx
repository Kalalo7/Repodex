import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import bosses from '@/data/bosses.json';

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />
      
      {/* Hero section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-primary">REPO</span>DEX
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Tu guía completa para sobrevivir en el mundo de R.E.P.O.
          </p>
          
          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <SearchBar />
          </div>
          
          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-dark-300/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-dark-400">
              <div className="text-4xl font-display font-bold text-primary">20+</div>
              <div className="text-gray-400">Entidades</div>
            </div>
            <div className="bg-dark-300/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-dark-400">
              <div className="text-4xl font-display font-bold text-accent">10+</div>
              <div className="text-gray-400">Mapas</div>
            </div>
            <div className="bg-dark-300/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-dark-400">
              <div className="text-4xl font-display font-bold text-secondary">50+</div>
              <div className="text-gray-400">Objetos</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories section */}
      <section className="py-16 px-4 bg-dark-200">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center text-white">
            EXPLORA LA <span className="text-primary">BASE DE DATOS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <CategoryCard 
              href="/bosses" 
              title="BOSSES" 
              description="Información detallada sobre todas las entidades del juego."
              color="primary"
            />
          
            <CategoryCard 
              href="/objetos" 
              title="OBJETOS" 
              description="Catálogo de todos los objetos y armas disponibles."
              color="secondary"
            />
            <CategoryCard 
              href="/guias" 
              title="GUÍAS" 
              description="Consejos y trucos para streamers y jugadores."
              color="warning"
            />
          </div>
        </div>
      </section>
      
      {/* Featured entities section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">
            ENTIDADES <span className="text-danger">PELIGROSAS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EntityCard 
              id="headman-repo"
              name="Headman Repo"
              danger="Extrema"
              description="Entidad veloz con ataques letales"
            />
            <EntityCard 
              id="bang-repo"
              name="Bang Repo"
              danger="Alta"
              description="Entidad explosiva que aparece en grupos"
            />
            <EntityCard 
              id="rugrat-repo"
              name="Rugrat Repo"
              danger="Media"
              description="Entidad infantil que lanza objetos para hacer daño"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/bosses" 
              className="inline-block font-display px-8 py-3 bg-dark-300 hover:bg-dark-400 text-primary border border-primary/30 rounded-md transition-colors"
            >
              VER TODAS LAS ENTIDADES →
            </Link>
          </div>
        </div>
      </section>
    
    </main>
  );
}

// Category card component
function CategoryCard({ 
  href, 
  title, 
  description, 
  color 
}: { 
  href: string; 
  title: string; 
  description: string; 
  color: 'primary' | 'secondary' | 'accent' | 'warning';
}) {
  const colorClasses = {
    primary: 'from-primary/20 to-transparent border-primary/30 hover:border-primary/60',
    secondary: 'from-secondary/20 to-transparent border-secondary/30 hover:border-secondary/60',
    accent: 'from-accent/20 to-transparent border-accent/30 hover:border-accent/60',
    warning: 'from-warning/20 to-transparent border-warning/30 hover:border-warning/60',
  };
  
  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    warning: 'text-warning',
  };

  return (
    <Link 
      href={href} 
      className={`block bg-gradient-to-b ${colorClasses[color]} bg-dark-300/50 backdrop-blur-sm p-6 rounded-lg border hover:shadow-lg transition-all duration-300`}
    >
      <h3 className={`font-display text-xl font-bold mb-3 ${textColor[color]}`}>{title}</h3>
      <p className="text-gray-300">{description}</p>
    </Link>
  );
}

// Entity card component
function EntityCard({ 
  id, 
  name, 
  danger, 
  description 
}: { 
  id: string; 
  name: string; 
  danger: 'Baja' | 'Media' | 'Alta' | 'Extrema'; 
  description: string;
}) {
  // Updated danger colors to match the boss detail page
  const dangerColors = {
    'Baja': 'bg-green-500/20 text-green-500 border-green-500/30',
    'Media': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    'Alta': 'bg-orange-500/20 text-orange-500 border-orange-500/30',
    'Extrema': 'bg-red-500/20 text-red-500 border-red-500/30',
  };

  const boss = bosses.find(b => b.id === id);
  const imageUrl = boss?.image;

  return (
    <Link 
      href={`/bosses/${id}`} 
      className="group block bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden hover:shadow-neon transition-all duration-300"
    >
      <div className="h-48 bg-dark-400 relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">👁️</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{name}</h3>
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${dangerColors[danger]}`}>
            Peligrosidad: {danger}
          </span>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </Link>
  );
}
