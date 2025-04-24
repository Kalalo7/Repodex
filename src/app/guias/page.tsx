import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';

export default function GuidesPage() {
  return (
    <main className="pt-16 bg-dark-200">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-display text-4xl font-bold mb-6 text-white">
            GUÍAS DE <span className="text-primary">R.E.P.O.</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Recursos y consejos para mejorar tu experiencia en R.E.P.O., tanto para jugadores como para streamers.
          </p>
          
          <SearchBar />
        </div>
        
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link 
            href="/guias/streamers" 
            className="group block bg-gradient-to-b from-secondary/20 to-transparent bg-dark-300/50 backdrop-blur-sm p-8 rounded-lg border border-secondary/30 hover:border-secondary/60 hover:shadow-neon-purple transition-all duration-300"
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-secondary group-hover:text-white transition-colors">
              GUÍAS PARA STREAMERS
            </h2>
            <p className="text-gray-300 mb-6">
              Consejos específicos para creadores de contenido que quieran transmitir R.E.P.O. y maximizar la experiencia para sus espectadores.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-secondary font-display">VER GUÍAS</span>
              <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </Link>
          
          <Link 
            href="/guias/jugadores" 
            className="group block bg-gradient-to-b from-accent/20 to-transparent bg-dark-300/50 backdrop-blur-sm p-8 rounded-lg border border-accent/30 hover:border-accent/60 hover:shadow-neon-cyan transition-all duration-300"
          >
            <h2 className="font-display text-2xl font-bold mb-4 text-accent group-hover:text-white transition-colors">
              GUÍAS PARA JUGADORES
            </h2>
            <p className="text-gray-300 mb-6">
              Estrategias, consejos y trucos para sobrevivir en el mundo de R.E.P.O. y completar el juego con éxito.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-accent font-display">VER GUÍAS</span>
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
        
        {/* Featured guides */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold mb-8 text-white">GUÍAS DESTACADAS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden hover:shadow-neon transition-all duration-300">
              <div className="h-40 bg-dark-400 flex items-center justify-center">
                <div className="text-4xl opacity-30">🎮</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Primeros pasos en R.E.P.O.</h3>
                <p className="text-gray-400 mb-4">Guía básica para comenzar tu aventura en el mundo de R.E.P.O.</p>
                {/* Update the link path */}
                <Link href="/guias/primeros-pasos" className="text-primary hover:text-white transition-colors">
                  Leer más →
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden hover:shadow-neon transition-all duration-300">
              <div className="h-40 bg-dark-400 flex items-center justify-center">
                <div className="text-4xl opacity-30">🎥</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Configuración para streamers</h3>
                <p className="text-gray-400 mb-4">Optimiza tu transmisión para maximizar la experiencia de terror.</p>
                <Link href="/guias/streamers/configuracion" className="text-primary hover:text-white transition-colors">
                  Leer más →
                </Link>
              </div>
            </div>
            
            <div className="bg-dark-300/50 backdrop-blur-sm rounded-lg border border-dark-400 overflow-hidden hover:shadow-neon transition-all duration-300">
              <div className="h-40 bg-dark-400 flex items-center justify-center">
                <div className="text-4xl opacity-30">🔍</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-white">Secretos y Easter Eggs</h3>
                <p className="text-gray-400 mb-4">Descubre los secretos ocultos y referencias en R.E.P.O.</p>
                {/* Update the link path */}
                <Link href="/guias/secretos" className="text-primary hover:text-white transition-colors">
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community resources section */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-8 text-white">RECURSOS DE LA COMUNIDAD</h2>
          
          <div className="bg-dark-300/50 backdrop-blur-sm p-6 rounded-lg border border-dark-400">
            <p className="text-gray-300 mb-6">
              La comunidad de R.E.P.O. ha creado numerosos recursos que pueden ayudarte a mejorar tu experiencia de juego.
              Aquí encontrarás enlaces a algunos de los mejores recursos disponibles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://discord.gg/repo-game" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-dark-400/30 rounded-lg border border-dark-400 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Discord Oficial</h3>
                  <p className="text-gray-400 text-sm">Únete a la comunidad para compartir estrategias y experiencias</p>
                </div>
              </a>
              
              <a 
                href="https://www.reddit.com/r/REPOGame/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-dark-400/30 rounded-lg border border-dark-400 hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zM11 7v4H7v2h4v4h2v-4h4v-2h-4V7h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Subreddit</h3>
                  <p className="text-gray-400 text-sm">Foro de discusión con guías y consejos de la comunidad</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}