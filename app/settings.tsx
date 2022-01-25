import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View,  Switch, Pressable } from  "react-native";
import { Drawer } from "expo-router/drawer";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Drawer.Screen options={{ title: "Settings" }} />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Notifications</Text>
            <Text style={styles.settingDescription}>Receive push notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#223058", true: "#2D5BFF" }}
            thumbColor="#EAF0FF"
          />
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Text style={styles.settingDescription}>Use dark theme</Text>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            trackColor={{ false: "#223058", true: "#2D5BFF" }}
            thumbColor="#EAF0FF"
          />
        </View>
        
        <View style={styles.divider} />
        
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Location Services</Text>
            <Text style={styles.settingDescription}>Allow location access</Text>
          </View>
          <Switch
            value={locationEnabled}
            onValueChange={setLocationEnabled}
            trackColor={{ false: "#223058", true: "#2D5BFF" }}
            thumbColor="#EAF0FF"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <Pressable style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Edit Profile</Text>
          <Text style={styles.settingButtonArrow}>›</Text>
        </Pressable>
        
        <View style={styles.divider} />
        
        <Pressable style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Change Password</Text>
          <Text style={styles.settingButtonArrow}>›</Text>
        </Pressable>
        
        <View style={styles.divider} />
        
        <Pressable style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Privacy Settings</Text>
          <Text style={styles.settingButtonArrow}>›</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>App Version</Text>
          <Text style={styles.infoValue}>1.0.0</Text>
        </View>
        
        <View style={styles.divider} />
        
        <Pressable style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Terms of Service</Text>
          <Text style={styles.settingButtonArrow}>›</Text>
        </Pressable>
        
        <View style={styles.divider} />
        
        <Pressable style={styles.settingButton}>
          <Text style={styles.settingButtonText}>Privacy Policy</Text>
          <Text style={styles.settingButtonArrow}>›</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </Pressable>
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    color: "#EAF0FF",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    color: "#EAF0FF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  settingDescription: {
    color:  "#91A0C6",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor:  "#223058",
    marginVertical: 4,
  },
  settingButton: {
    flexDirection: "row",
    justifyContent:  "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  settingButtonText: {
    color: "#EAF0FF",
    fontSize: 16,
    fontWeight: "600",
  },
  settingButtonArrow: {
    color: "#91A0C6",
    fontSize: 24,
    fontWeight: "300",
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
  logoutButton: {
    backgroundColor: "#1A1F3A",
    borderColor: "#FF3B30",
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems:  "center",
    marginTop: 8,
  },
  logoutButtonText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "800",
  },
});
