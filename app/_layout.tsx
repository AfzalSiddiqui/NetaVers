import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Drawer
        screenOptions={{
          headerStyle: { backgroundColor: "#0B1020" },
          headerTintColor: "#EAF0FF",
          headerTitleStyle: { fontWeight: "700" },
          drawerStyle: { backgroundColor: "#0B1020" },
          drawerActiveTintColor: "#2D5BFF",
          drawerInactiveTintColor: "#EAF0FF",
          drawerLabelStyle: { fontWeight: "600" },
          contentStyle: { backgroundColor: "#0B1020" }
        }}
      >
        <Drawer.Screen 
          name="index" 
          options={{ 
            title: "Home",
            drawerLabel: "Home"
          }} 
        />
        <Drawer.Screen 
          name="profile" 
          options={{ 
            title: "Profile",
            drawerLabel: "Profile"
          }} 
        />
        <Drawer.Screen 
          name="settings" 
          options={{ 
            title: "Settings",
            drawerLabel: "Settings"
          }} 
        />
        <Drawer.Screen 
          name="verse/[id]" 
          options={{ 
            title: "Verse",
            drawerItemStyle: { display: "none" }
          }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
