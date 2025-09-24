import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

export default function MenuScreen() {
  const router = useRouter();

  const cards = [
    { title: "HomePrincipal", route: "/HomePrincipal" },
    { title: "Home", route: "/Home" },
    { title: "Formulario", route: "/Formulario" },
    { title: "FormularioV2", route: "/FormularioV2" },
    { title: "Lista_Alumnos", route: "/Lista_Alumnos" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.title}
          style={styles.card}
          onPress={() => router.push(card.route)}
        >
          <Text style={styles.cardText}>{card.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#050818",
    minHeight: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#E6E6FA",
  },
  card: {
    width: width * 0.8,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: "#4c51bf",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
