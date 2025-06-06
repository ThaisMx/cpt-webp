"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface SocialProof {
  name: string;
  location: string;
  action: string;
}

const socialProofs: SocialProof[] = [
  {
    name: "João Silva",
    location: "São Paulo",
    action: "acabou de se inscrever no treinamento"
  },
  {
    name: "Maria Santos",
    location: "Rio de Janeiro",
    action: "está assistindo agora"
  },
  {
    name: "Pedro Oliveira",
    location: "Curitiba",
    action: "começou o treinamento"
  }
];

export function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProof, setCurrentProof] = useState<SocialProof>(socialProofs[0]);

  useEffect(() => {
    const showPopup = () => {
      const randomProof = socialProofs[Math.floor(Math.random() * socialProofs.length)];
      setCurrentProof(randomProof);
      setIsVisible(true);

      // Esconde o popup após 4 segundos
      setTimeout(() => setIsVisible(false), 4000);
    };

    // Mostra o primeiro popup após 2 segundos
    const initialTimeout = setTimeout(showPopup, 2000);

    // Configura o intervalo para mostrar os próximos popups
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (7000 - 5000) + 5000); // Entre 5 e 7 segundos
      showPopup();
    }, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white text-black p-4 rounded-lg shadow-lg animate-slide-up z-50 max-w-sm">
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded-full">
          <MapPin className="w-4 h-4 text-blue-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-semibold">{currentProof.name}</span> de{" "}
            <span className="font-semibold">{currentProof.location}</span>{" "}
            {currentProof.action}
          </p>
          <p className="text-xs text-gray-500 mt-1">Há alguns segundos atrás</p>
        </div>
      </div>
    </div>
  );
} 