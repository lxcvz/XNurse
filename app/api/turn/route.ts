import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    [
      {
        id: 1,
        title: "Enfermeiro Plantonista",
        location: "São Paulo, SP",
        salary: "R$ 350,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 2,
        title: "Técnico de Enfermagem",
        location: "São Paulo, SP",
        salary: "R$ 280,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 3,
        title: "Enfermeiro UTI",
        location: "São Paulo, SP",
        salary: "R$ 400,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 4,
        title: "Enfermeiro Pediátrico",
        location: "São Paulo, SP",
        salary: "R$ 370,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 5,
        title: "Técnico de Enfermagem Domiciliar",
        location: "São Paulo, SP",
        salary: "R$ 250,00",
        hours: "8h",
        period: "Manhã / Tarde",
      },
      {
        id: 6,
        title: "Enfermeiro Obstetra",
        location: "São Paulo, SP",
        salary: "R$ 420,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 7,
        title: "Técnico de Enfermagem Emergência",
        location: "São Paulo, SP",
        salary: "R$ 300,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
      {
        id: 8,
        title: "Enfermeiro Cirúrgico",
        location: "São Paulo, SP",
        salary: "R$ 450,00",
        hours: "12h",
        period: "Manhã / Tarde",
      },
    ],
    { status: 200 }
  );
}
