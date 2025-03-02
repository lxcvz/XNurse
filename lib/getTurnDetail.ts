import { TurnData } from "@/app/types/turn";

export async function getTurnDetailById(slug: string): Promise<TurnData> {
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/turn/${slug}`,
    {
      next: { revalidate: 5 * 60 },
    }
  );

  if (!response.ok) throw new Error("Erro ao buscar os turnos disponíveis");

  return response.json();
}
