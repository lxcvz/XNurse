import TurnDetail from "@/components/turn/TurnDetail";
import { getTurnDetailById } from "@/lib/getTurnDetail";
import Head from "next/head";
import Link from "next/link";
import { Suspense } from "react";
import { MdArrowBack } from "react-icons/md";

export default async function TurnDetailsWrapper({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const { slug } = await params;

  const turnData = await getTurnDetailById(slug);

  return (
    <div className="min-h-screen max-w-4xl mx-auto py-8 px-4 md:px-8 ">
      <Head>
        <title>{turnData.service} | Detalhes da Vaga</title>
        <meta
          name="description"
          content={`Detalhes sobre a vaga de ${turnData.service}`}
        />
      </Head>

      <div className="mb-4">
        <Link
          href="/turnos"
          className="text-blue-500 hover:text-blue-700 flex items-center transition-colors"
        >
          <MdArrowBack />
          Voltar para listagem
        </Link>
      </div>

      <Suspense fallback={<span>loading...</span>}>
        <TurnDetail turnData={turnData} />
      </Suspense>
    </div>
  );
}
