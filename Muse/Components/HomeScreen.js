// src/screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.userimage} source={require("../Images/profile.png")} />
        <Image style={styles.search} source={require("../Images/search.png")} />
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.username}>Melissa Otoo</Text>
      </View>
      <View style={styles.card}>
        <Image source={require("../Images/Card.png")} />
      </View>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <View style={styles.bx}>
            <Image
              style={styles.image}
              source={require("../Images/send.png")}
            />
          </View>
          <Text style={styles.sent}>Sent</Text>
        </View>

        <View style={styles.button}>
          <Image
            style={styles.image}
            source={require("../Images/recieve.png")}
          />
          <Text style={styles.receive}>Receive</Text>
        </View>
        <View style={styles.button}>
          <Image style={styles.image} source={require("../Images/loan.png")} />
          <Text style={styles.loan}>Loan</Text>
        </View>
        <View style={styles.button}>
          <Image style={styles.image} source={require("../Images/topUp.png")} />
          <Text style={styles.topup}>Topup</Text>
        </View>
      </View>

      <View style={styles.transactionText}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>See All</Text>
      </View>

      <View style={styles.transactions}>
        <View style={styles.transaction}>
          <Image
            source={require("../Images/moneyTransfer.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.transactionText}>Money Transfer</Text>
          <Text style={styles.amount}>$300</Text>
        </View>
        <View style={styles.transaction}>
          <Image
            source={require("../Images/grocery.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.transactionText}>Grocery Shopping</Text>
          <Text style={styles.amount}>-$88</Text>
        </View>
        <View style={styles.transaction}>
          <Image
            source={require("../Images/apple.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.transactionText}>Apple Store</Text>
          <Text style={styles.amount}>-$5.99</Text>
        </View>
        <Image
          source={require("../Images/spotify.png")}
          style={{ width: 20, height: 20 }}
        />
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
  top: {
    flex: 1,
    flexDirection: "row",
  },
  welcomeText: {
    fontSize: 17,
    marginLeft: 1,
  },
  search: {
  left: 600,
  },

  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 27,
    right:110,
  
  },
  card: {
    padding: 10,
    marginBottom: 20,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sent: {
    fontSize: 14,
  },
  loan: {
    fontSize: 14,
  },
  receive: {
    fontSize: 14,
  },
  topup: {
    fontSize: 14,
  },

  transactions: {
    flex: 1,
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  transactionText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "blue",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
