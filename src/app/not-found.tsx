import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-8">Página no encontrada</h2>
        <p className="text-xl text-gray-300 mb-12">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Link 
          href="/" 
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}