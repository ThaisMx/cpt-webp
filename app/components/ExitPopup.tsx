"use client";

import { useEffect, useState } from "react";

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShownBefore, setHasShownBefore] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownBefore) {
        setIsVisible(true);
        setHasShownBefore(true);
      }
    };

    // Aguarda 3 segundos antes de começar a monitorar o mouse
    timeoutId = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [hasShownBefore]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 md:p-6 lg:p-8 z-50">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-[90%] sm:max-w-lg w-full relative animate-fadeIn">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-4 top-2 sm:top-4 text-gray-500 hover:text-gray-700 p-2 text-xl"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="text-center text-black">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Você está quase lá!
          </h2>
          
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-2 sm:px-4">
            Não deixe nada ficar no seu caminho - complete seu 
            cadastro agora para desbloquear meu método de trading 
            que mostra exatamente como{" "}
            <span className="font-semibold">
              fiz meu Primeiro Milhão operando!
            </span>
          </p>

          <ul className="text-left mb-4 sm:mb-6 space-y-2 sm:space-y-3 text-sm sm:text-base px-2 sm:px-4">
            <li className="flex items-center">
              <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
              <span className="flex-1">
                Avaliado como Melhor Curso de Trading por mais de 10 mil alunos
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
              <span className="flex-1">
                Transformou milhares de traders comuns em traders profissionais
              </span>
            </li>
          </ul>

          <button
            onClick={() => setIsVisible(false)}
            className="w-full bg-[#0096FF] hover:bg-[#0084E0] text-white font-bold py-3 sm:py-4 px-4 rounded transition-colors text-sm sm:text-base"
          >
            Voltar para o Cadastro
          </button>
        </div>
      </div>
    </div>
  );
} 