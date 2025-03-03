"use client";

import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";
import { TurnData } from "@/app/types/turn";

export default function TurnDetail({ turnData }: { turnData: TurnData }) {
  const [isLoading, setisLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    try {
      setisLoading(true);

      setTimeout(() => {
        toast.success("Sua candidatura foi enviada com sucesso!", {
          description: "Você irá receber uma confirmação em seu e-mail.",
        });

        setisLoading(false);
        setIsApplied(true);
      }, 1000);
    } catch (err) {
      toast.error("Falha ao candidatar-se.", {
        description: "Tente novamente mais tarde.",
      });
    }
  };

  return (
    <div>
      <div className="rounded-lg p-6 mb-6 flex flex-col md:flex-row gap-6 shadow-md border-2 border-transparent">
        <div className="flex md:w-1/2 h-auto">
          <div className="relative bg-white w-[120px] aspect-square rounded-md shadow-sm overflow-hidden mr-3">
            <Image
              src="https://picsum.photos/200/300?random=1"
              alt="Logo do contratante"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold mb-2">
              {turnData.clientName}
            </h1>
            <div className="flex flex-row gap-2">
              <div className="w-full md:w-1/2">
                <Link className="text-blue-500" href="">
                  {turnData.website}
                </Link>
                <p className="text-gray-600">{turnData.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <p className="text-gray-700 text-sm">{turnData.mission}</p>
        </div>
      </div>

      <div className="shadow-md border-2 border-transparent rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Serviço</h2>
            <p>{turnData.service}</p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">
              Data início/fim
            </h2>
            <p>
              {turnData.startDate} - {turnData.endDate}
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Período</h2>
            <p>{turnData.period}</p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Localização</h2>
            <p>{turnData.serviceLocation}</p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Total horas</h2>
            <p>{turnData.hours}</p>
          </div>

          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-700 mb-2">Valor</h2>
            <p className="text-green-800 font-medium">{turnData.value}</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-semibold text-gray-700 mb-2">Descrição</h2>
          <p className="text-gray-600">{turnData.description}</p>
        </div>

        <div className="flex justify-center">
          <Button
            className={` text-white py-3 px-8 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer ${
              isLoading ? "opacity-75" : ""
            }`}
            onClick={handleApply}
            disabled={isLoading || isApplied}
          >
            {isLoading
              ? "Enviando..."
              : isApplied
              ? "Candidatura enviada"
              : "Candidatar-se"}
          </Button>
        </div>
      </div>
    </div>
  );
}
