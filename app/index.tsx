import React, { useEffect, useMemo, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { verses } from "../src/data/verses";
import { loadFavoriteIds, toggleFavoriteId } from "../src/storage/favorites";
import type { Verse } from "../src/types/verse";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let mounted = true;
    (async () => {
      const ids = await loadFavoriteIds();
      if (mounted) setFavoriteIds(ids);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return verses;
    return verses.filter((v) => {
      return (
        v.reference.toLowerCase().includes(q) ||
        v.text.toLowerCase().includes(q) ||
        (v.version ?? "").toLowerCase().includes(q) ||
        (v.tags ?? []).some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query]);

  async function onToggleFavorite(id: string) {
    const next = await toggleFavoriteId(id);
    setFavoriteIds(next);
  }

  function renderItem({ item }: { item: Verse }) {
    const isFav = favoriteIds.has(item.id);
    return (
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.ref}>{item.reference}</Text>
          <Text style={styles.meta}>{item.version ?? "—"}</Text>
        </View>
        <Text style={styles.text} numberOfLines={3}>
          {item.text}
        </Text>
        <View style={styles.cardBottom}>
          <Link
            href={{ pathname: "/verse/[id]", params: { id: item.id } }}
            asChild
          >
            <Pressable style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Open</Text>
            </Pressable>
          </Link>
          <Pressable
            style={[styles.secondaryBtn, isFav && styles.secondaryBtnActive]}
            onPress={() => onToggleFavorite(item.id)}
          >
            <Text style={styles.secondaryBtnText}>
              {isFav ? "Favorited" : "Favorite"}
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NetaVers</Text>
      <Text style={styles.subtitle}>Curate your metaverse interview spaces.</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search room, role, difficulty, or tag…"
        placeholderTextColor="#91A0C6"
        style={styles.search}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      <FlatList
        data={filtered}
        keyExtractor={(v) => v.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  title: {
    color: "#EAF0FF",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 0.2
  },
  subtitle: {
    color: "#B9C6EA",
    marginTop: 6,
    marginBottom: 14
  },
  search: {
    backgroundColor: "#121A33",
    borderColor: "#223058",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    color: "#EAF0FF"
  },
  listContent: {
    paddingVertical: 14,
    paddingBottom: 28
  },
  card: {
    backgroundColor: "#0F1730",
    borderColor: "#223058",
    borderWidth: 1,
    borderRadius: 16,
    padding: 14
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 10,
    marginBottom: 8
  },
  ref: {
    color: "#EAF0FF",
    fontWeight: "800",
    fontSize: 16
  },
  meta: {
    color: "#91A0C6",
    fontSize: 12
  },
  text: {
    color: "#D4DCF5",
    lineHeight: 20
  },
  cardBottom: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12
  },
  primaryBtn: {
    backgroundColor: "#2D5BFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "800"
  },
  secondaryBtn: {
    backgroundColor: "#121A33",
    borderColor: "#223058",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12
  },
  secondaryBtnActive: {
    borderColor: "#2D5BFF"
  },
  secondaryBtnText: {
    color: "#EAF0FF",
    fontWeight: "700"
  }
});

