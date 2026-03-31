import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        O seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa7109] to-[#ab0029]">marketplace</span> local.
      </h1>
      
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Compre dos melhores comércios da sua região ou crie a sua própria loja virtual em poucos minutos. O 44Go conecta você a tudo.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/auth/register"
          className="bg-gradient-to-r from-[#fa7109] to-[#ab0029] text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          Criar minha conta
        </Link>
        <Link
          href="/auth/login"
          className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          Já tenho uma conta
        </Link>
      </div>
    </div>
  );
}