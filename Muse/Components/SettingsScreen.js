import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const SettingsScreen = () => {
  const { theme, toggleTheme, currentTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Text style={[styles.title, { color: currentTheme.text }]}>Settings</Text>
      <Text style={[styles.text, { color: currentTheme.text }]}>Language</Text>
      <Text style={[styles.text, { color: currentTheme.text }]}>My Profile</Text>
      <Text style={[styles.text, { color: currentTheme.text }]}>Contact Us</Text>
      <Text style={[styles.text, { color: currentTheme.text }]}>Change Password</Text>
      <Text style={[styles.text, { color: currentTheme.text }]}>Privacy Policy</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: currentTheme.text }]}>Theme</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
