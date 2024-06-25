// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back,</Text>
      <Text style={styles.username}>Melissa Otoo</Text>
      <View style={styles.card}>
        <Text style={styles.cardNumber}>4562   1122   4595   7852</Text>
        <View style={styles.cardDetails}>
          <Text style={styles.expiryDate}>24/2000</Text>
          <Text style={styles.cvv}>6986</Text>
        </View>
      </View>
      <View style={styles.transactions}>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Money Transfer</Text>
          <Text style={styles.amount}>$300</Text>
        </View>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Grocery Shopping</Text>
          <Text style={styles.amount}>-$88</Text>
        </View>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Apple Store</Text>
          <Text style={styles.amount}>-$5.99</Text>
        </View>
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>Spotify</Text>
          <Text style={styles.amount}>-$12.99</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryDate: {
    fontSize: 16,
  },
  cvv: {
    fontSize: 16,
  },
  transactions: {
    flex: 1,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  transactionText: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
