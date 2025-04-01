"use client";

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, Clock } from "lucide-react"
import { WebinarParams } from "@/components/WebinarParams"

export default function ConfirmacaoWebinar() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="bg-[#0096FF] text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Parabéns! Sua vaga está reservada
          </h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Parâmetros do Webinar */}
        <WebinarParams />

        {/* Seção Principal */}
        <div className="max-w-3xl mx-auto">
          {/* Imagem e Informações do Apresentador */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/images/willian-aksenen.png"
                alt="Willian Aksenen"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-2">Apresentado por:</p>
              <h2 className="text-2xl font-bold mb-1">Willian Aksenen</h2>
              <p className="text-gray-600 mb-2">Trader Profissional & Mentor</p>
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                6+ Anos de Experiência
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Especialista em Forex reconhecido internacionalmente com mais de 15
                mil alunos de sucesso em todo o mundo.
              </p>
            </div>
          </div>

          {/* O que você vai aprender */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
              Aqui está o que você vai aprender durante esta aula gratuita ao vivo:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como identificar negociações altamente lucrativas que podem gerar
                  muito dinheiro em menos de 10 minutos por dia
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Como obter lucros insanos e ainda assim estar livre de riscos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como ganhar e se tornar lucrativo consistentemente mesmo se você
                  for um novo trader sem conhecimento e ainda assim manter um
                  estilo de vida
                </span>
              </li>
            </ul>
          </div>

          {/* Botão de Ação */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#0096FF] hover:bg-[#0084E0] text-white font-bold py-6 px-8 rounded-lg text-xl w-full md:w-auto"
            >
              Adicionar ao Calendário
            </Button>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2024 Willian Aksenen. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}