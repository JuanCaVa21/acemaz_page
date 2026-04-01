import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { products, type Product } from "@/data/mockData";

const API_URL = import.meta.env.VITE_API_RECOMMENDATIONS_URL || "/api/v1/recomendaciones";

const fallbackProducts = products.filter((p) => p.badge).slice(0, 4);

async function fetchRecommendations(userId?: string): Promise<Product[]> {
  const url = new URL(API_URL, window.location.origin);
  if (userId) url.searchParams.set("user_id", userId);

  const headers: Record<string, string> = { "Content-Type": "application/json" };

  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function useRecommendations() {
  const { user, isAuthenticated } = useAuth();

  return useQuery<Product[]>({
    queryKey: ["recommendations", user?.id ?? "anonymous"],
    queryFn: () => fetchRecommendations(isAuthenticated ? user?.id : undefined),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    placeholderData: fallbackProducts,
    meta: { fallback: fallbackProducts },
  });
}
