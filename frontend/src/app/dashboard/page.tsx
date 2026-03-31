'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/auth/login'); // Redireciona se não estiver logado
      } else {
        setLoading(false);
      }
    };
    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Carregando painel...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Painel da Loja</h1>
        <button onClick={handleLogout} className="text-red-600 hover:underline font-medium">
          Sair da conta
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card de Produtos */}
        <Link href="/dashboard/products" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Gerenciar Produtos</h2>
          <p className="text-gray-600">Adicione, edite ou remova produtos do catálogo da sua loja.</p>
        </Link>

        {/* Card de Pedidos */}
        <Link href="/dashboard/orders" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-bold text-green-600 mb-2">Pedidos Recebidos</h2>
          <p className="text-gray-600">Acompanhe e atualize o status dos pedidos dos seus clientes.</p>
        </Link>
      </div>
    </div>
  );
}