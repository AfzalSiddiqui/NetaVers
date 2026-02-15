import { Link, Stack } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from    "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Not Found" }} />
      <Text style={styles.title}>Page not found</Text>
      <Text style={styles.subtle}>Go back to the verse  list.</Text>
      <Link href="/" asChild>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Go Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  title: {
    color: "#EAF0FF",
    fontSize: 24,
    fontWeight: "900"
  },
  subtle: {
    color: "#B9C6EA",
    marginTop: 8
  },
  btn: {
    marginTop: 14,
    alignSelf: "flex-start",
    backgroundColor: "#2D5BFF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12
  },
  btnText: {
    color: "#FFFFFF",
    fontWeight: "900"
  }
});

