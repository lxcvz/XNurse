import Head from "next/head";
import { Suspense } from "react";
import { getTurns } from "@/lib/getTurns";
import { TurnList } from "../../components/turn/TurnList";

export default async function TurnPage() {
  const data = await getTurns();

  return (
    <div className="min-h-screen max-w-7xl mx-auto ">
      <Head>
        <title>Turnos disponíveis</title>
        <meta
          name="description"
          content="Listagem de oportunidades de trabalho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-6 px-4 md:px-0">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Turnos disponíveis
        </h1>

        <Suspense fallback={<span>Loading...</span>}>
          <TurnList data={data} />
        </Suspense>
      </main>
    </div>
  );
}
