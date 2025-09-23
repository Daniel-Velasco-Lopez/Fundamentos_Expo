import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/52/11/4b/52114b1ffb3414dd4bcd5fbf4e6d1cff.jpg",
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>ITT Tlaxiaco</Text>
        <Text style={[styles.text, styles.subtitle]}>Desarrollo Móvil</Text>
        <Text style={[styles.text, styles.name]}>Daniel Velasco López</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1a2b", // tono oscuro tomado de la imagen
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 400,
  },
  textContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  text: {
    color: "#ffffff", // blanco para contraste
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 6,
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
  },
});
