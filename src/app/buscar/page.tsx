import Navbar from '@/components/Navbar';
import Link from 'next/link';
import bosses from '@/data/bosses.json';
import SearchBar from '@/components/SearchBar';
import gameItems from '@/data/gameItems.json';

// Make the component async to match Next.js expectations
export default async function SearchPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const query = searchParams.q || '';
  
  const filteredBosses = bosses.filter((boss) => {
    const searchableText = `${boss.nombre} ${boss.descripcionCorta} ${boss.descripcionCompleta} ${boss.ubicacion}`.toLowerCase();
    return searchableText.includes(typeof query === 'string' ? query.toLowerCase() : '');
  });
  const filteredItems = gameItems.categorias.flatMap(categoria => 
    categoria.objetos.filter(objeto => {
      const searchableText = `${objeto.nombre} ${objeto.descripcion}`.toLowerCase();
      return searchableText.includes(typeof query === 'string' ? query.toLowerCase() : '');
    })
  );
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-primary">Resultados de búsqueda: &ldquo;{query}&rdquo;</h1>
        
        <div className="mb-8">
          <SearchBar />
        </div>
        
        {filteredBosses.length > 0 || filteredItems.length > 0 ? (
          <div>
            {filteredBosses.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Bosses ({filteredBosses.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBosses.map((boss) => (
                    <Link 
                      href={`/bosses/${boss.id}`} 
                      key={boss.id}
                      className="bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-primary">{boss.nombre}</h3>
                        <div className="flex items-center mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            boss.peligrosidad === 'Alta' ? 'bg-red-900 text-red-200' :
                            boss.peligrosidad === 'Media' ? 'bg-yellow-900 text-yellow-200' :
                            'bg-green-900 text-green-200'
                          }`}>
                            Peligrosidad: {boss.peligrosidad}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{boss.descripcionCorta}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {filteredItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Objetos ({filteredItems.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item) => (
                    <Link 
                      href={`/guias/objetos`} 
                      key={item.nombre}
                      className="bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-primary">{item.nombre}</h3>
                        <p className="text-gray-300 mb-4">{item.descripcion}</p>
                        <div className="text-sm text-primary">
                          Precio: ${item.precio.toLocaleString()}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">No se encontraron resultados para &ldquo;{query}&rdquo;</h2>
            <p className="text-gray-400">Intenta con otra búsqueda o navega por las categorías.</p>
          </div>
        )}
      </div>
    </main>
  );
}