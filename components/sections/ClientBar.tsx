"use client";

import Image from "next/image";

const clients = [
  { name: "DryWash", src: "/images/clientes/DryWash.png" },
  { name: "SoftCut", src: "/images/clientes/SOFTCUT.PNG" },
  { name: "PlastFrio", src: "/images/clientes/plastfrio.png" },
  { name: "Impaktto", src: "/images/clientes/Impaktto.png" },
  { name: "Unilever", src: "/images/clientes/unilever.png" },
  { name: "Multieco", src: "/images/clientes/Multieco.png" },
  { name: "Malwee", src: "/images/clientes/Malwee.png" },
  { name: "Azul Seguros", src: "/images/clientes/azul-seguros.png" },
  { name: "Quimilaus", src: "/images/clientes/Quimilaus.png" },
];

const allClients = [...clients, ...clients];

export default function ClientBar() {
  return (
    <section className="bg-[#F4F5F3] border-y border-[#E0E3DF] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#0C6201] text-center">
          Empresas que já confiaram na Escalei
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div
          className="flex items-center gap-20"
          style={{ animation: "scroll-logos 32s linear infinite", width: "max-content" }}
        >
          {allClients.map((client, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-20">
              <Image
                src={client.src}
                alt={client.name}
                width={216}
                height={77}
                quality={100}
                className="h-[88px] lg:h-[68px] w-auto object-contain"
                style={{ filter: "grayscale(1) brightness(0.4)" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
