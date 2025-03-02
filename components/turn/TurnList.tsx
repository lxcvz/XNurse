"use client";
import { TurnCard } from "@/app/types/turn";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Filter } from "@/components/Filter";
import { useMediaQuery } from "react-responsive";

export function TurnList({ data }: { data: TurnCard[] }) {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <main className="container mx-auto py-6 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-6">
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Filtros</AccordionTrigger>
              <AccordionContent>
                <Filter />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <Filter />
        )}

        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Turnos disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((turn) => (
              <div
                key={turn.id}
                className="p-4 rounded-lg shadow-md border-2 border-transparent hover:border-blue-400 transition-all"
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="container mb-3">
                    <h3 className="font-bold text-lg text-gray-800 mb-3">
                      {turn.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{turn.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        {turn.hours} - {turn.period}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-medium text-green-800">
                        {turn.salary}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={() => {
                      router.push(`/turnos/${turn.id}`);
                    }}
                    className="cursor-pointer"
                  >
                    Candidatar-se
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
