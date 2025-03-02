"use client";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export function Filter() {
  return (
    <div className="w-full md:w-1/4 border p-4 rounded-lg h-max">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Filtros // incoming
      </h2>

      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Período</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Manhã
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tarde
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Noite
            </label>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-2">Carga horária</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Até 30h semanais
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              40h semanais
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              44h semanais
            </label>
          </div>
        </div>
      </div>

      <Button className="w-full cursor-pointer">Aplicar Filtros</Button>
    </div>
  );
}
