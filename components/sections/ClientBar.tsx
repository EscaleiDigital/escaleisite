"use client";

import Image from "next/image";

const clients = [
  { name: "DryWash", src: "/images/clientes/DryWash.png" },
  { name: "SoftCut", src: "/images/clientes/SOFTCUT.PNG" },
  { name: "PlastFrio", src: "/images/clientes/plastfrio.png" },
  { name: "Impaktto", src: "/images/clientes/Impaktto.png" },
  { name: "Unilever", src: "/images/clientes/unilever.png" },
  { name: "Multieco", src: "/images/clientes/Multieco.jfif" },
  { name: "Malwee", src: "/images/clientes/Malwee.png" },
  { name: "Azul Seguros", src: "/images/clientes/azul-seguros.png" },
  { name: "Quimilaus", src: "/images/clientes/Quimilaus.jpg" },
];

// Duplica para scroll infinito suave
const allClients = [...clients, ...clients];

export default function ClientBar() {
  return (
    <section className="bg-white border-y border-[#F4F5F3] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#C4CBD1] text-center">
          Empresas que já confiaram na Escalei
        </p>
      </div>

      {/* Scroll infinito */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center">
          {allClients.map((client, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-200"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 28s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
