import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { verses } from "../../src/data/verses";
import { loadFavoriteIds, toggleFavoriteId } from "../../src/storage/favorites";

export default function VerseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const verse = useMemo(() => verses.find((v) => v.id === id), [id]);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const favs = await loadFavoriteIds();
      if (mounted && id) setIsFav(favs.has(id));
    })();
    return () => {
      mounted = false;
    };
  }, [id]);

  async function onToggle() {
    if (!id) return;
    const next = await toggleFavoriteId(id);
    setIsFav(next.has(id));
  }

  if (!verse) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Destination" }} />
        <Text style={styles.title}>Not found</Text>
        <Text style={styles.subtle}>
          We couldn’t find this destination. Go back and pick another one.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: verse.reference }} />
      <View style={styles.header}>
        <Text style={styles.title}>{verse.reference}</Text>
        <Text style={styles.meta}>{verse.version ?? "—"}</Text>
      </View>

      <Text style={styles.text}>{verse.text}</Text>

      <Pressable
        style={[styles.btn, isFav && styles.btnActive]}
        onPress={onToggle}
      >
        <Text style={styles.btnText}>{isFav ? "Favorited" : "Favorite"}</Text>
      </Pressable>

      {!!verse.tags?.length && (
        <View style={styles.tags}>
          {verse.tags.map((t) => (
            <View key={t} style={styles.tag}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 28
  },
  header: {
    marginBottom: 10
  },
  title: {
    color: "#EAF0FF",
    fontSize: 26,
    fontWeight: "900"
  },
  meta: {
    color: "#91A0C6",
    marginTop: 4
  },
  text: {
    color: "#D4DCF5",
    lineHeight: 24,
    fontSize: 16,
    marginTop: 10
  },
  btn: {
    marginTop: 16,
    alignSelf: "flex-start",
    backgroundColor: "#121A33",
    borderColor: "#223058",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12
  },
  btnActive: {
    borderColor: "#2D5BFF"
  },
  btnText: {
    color: "#EAF0FF",
    fontWeight: "800"
  },
  subtle: {
    color: "#B9C6EA",
    marginTop: 8
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14
  },
  tag: {
    backgroundColor: "#0F1730",
    borderColor: "#223058",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999
  },
  tagText: {
    color: "#B9C6EA",
    fontWeight: "700",
    fontSize: 12
  }
});

