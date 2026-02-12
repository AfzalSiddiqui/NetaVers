import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Drawer } from  "expo-router/drawer";

export default function  ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Drawer.Screen options={{ title: "Profile" }} />
      
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location</Text>
          <Text style={styles.infoValue}>San Francisco, CA</Text>
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Member Since</Text>
          <Text style={styles.infoValue}>January 2024</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistics</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Views</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 28,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
    paddingTop: 20,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2D5BFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#223058",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "800",
  },
  name: {
    color: "#EAF0FF",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
  },
  email: {
    color: "#91A0C6",
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#EAF0FF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  infoLabel: {
    color: "#91A0C6",
    fontSize: 16,
  },
  infoValue: {
    color: "#EAF0FF",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "#223058",
    marginVertical: 4,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#0F1730",
    borderColor: "#223058",
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    color: "#2D5BFF",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 4,
  },
  statLabel: {
    color: "#91A0C6",
    fontSize: 14,
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#223058",
    marginHorizontal: 20,
  },
});
