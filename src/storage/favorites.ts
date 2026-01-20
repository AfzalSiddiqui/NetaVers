import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "netavers:favorites:v1";

function parseIds(raw: string | null): Set<string> {
  if (!raw) return new Set();
  try {
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter((x): x is string => typeof x === "string"));
  } catch {
    return new Set();
  }
}

async function persist(ids: Set<string>) {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(ids)));
}

export async function loadFavoriteIds(): Promise<Set<string>> {
  const raw = await AsyncStorage.getItem(FAVORITES_KEY);
  return parseIds(raw);
}

export async function toggleFavoriteId(id: string): Promise<Set<string>> {
  const ids = await loadFavoriteIds();
  if (ids.has(id)) ids.delete(id);
  else ids.add(id);
  await persist(ids);
  return ids;
}

