import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0B1020" },
          headerTintColor: "#EAF0FF",
          headerTitleStyle: { fontWeight: "700" },
          contentStyle: { backgroundColor: "#0B1020" }
        }}
      />
    </>
  );
}

