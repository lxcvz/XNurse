import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

const mock = [
  {
    id: 1,
    clientName: "Cliente 1",
    website: "www.cliente1.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 2,
    clientName: "Cliente 2",
    website: "www.cliente2.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 3,
    clientName: "Cliente 3",
    website: "www.cliente3.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 4,
    clientName: "Cliente 4",
    website: "www.cliente4.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 5,
    clientName: "Cliente 5",
    website: "www.cliente5.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 6,
    clientName: "Cliente 6",
    website: "www.cliente6.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 7,
    clientName: "Cliente 7",
    website: "www.cliente7.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
  {
    id: 8,
    clientName: "Cliente 8",
    website: "www.cliente8.com.br",
    businessType: "Subsidiária ou segmento de negócio",
    location: "São Paulo, Brasil",
    service: "Enfermeiro(a) Home Care",
    serviceLocation: "Zona Sul - São Paulo",
    value: "R$ 350,00",
    hours: "12h",
    startDate: "01/03/2025",
    endDate: "31/03/2025",
    period: "Manhã / Tarde",
    mission:
      " Nossa missão é garantir que todos, em qualquer lugar, tenham acesso ao profissional de saúde que precisam, quando precisam.",
    description:
      "Buscamos profissionais de enfermagem para atendimento domiciliar. O profissional será responsável pelos cuidados gerais do paciente, administração de medicamentos, monitoramento de sinais vitais e elaboração de relatórios de acompanhamento. Necessário experiência prévia em home care e disponibilidade para plantões de 12 horas.",
  },
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  const turn = mock.find((data) => String(data.id) === slug);

  if (!turn) {
    return NextResponse.json(
      { error: "Turno não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(turn, { status: 200 });
}
