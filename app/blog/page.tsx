import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Escalei Digital",
  description: "Conteúdo estratégico sobre vendas, performance e crescimento comercial.",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#F4F5F3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-sm text-[#4E555B] hover:text-[#0E261B] transition-colors mb-8 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold text-[#111111] mb-4">Blog</h1>
        <p className="text-[#4E555B]">Em breve: conteúdo estratégico sobre vendas, performance e crescimento comercial.</p>
      </div>
    </div>
  );
}
