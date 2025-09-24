import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const goToDetails = () => setCurrentPage("details");
  const goToHome = () => setCurrentPage("home");

  return (
    <View style={styles.container}>
      <View style={styles.appContainer}>
        {currentPage === "home" && (
          <View style={styles.page}>
            <Text style={styles.title}>Pantalla Principal</Text>
            <TouchableOpacity style={styles.button} onPress={goToDetails}>
              <Text style={styles.buttonText}>Ir a Detalles</Text>
            </TouchableOpacity>
          </View>
        )}

        {currentPage === "details" && (
          <View style={styles.page}>
            <Text style={styles.title}>Pantalla de Detalles</Text>
            <TouchableOpacity style={styles.button} onPress={goToHome}>
              <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  appContainer: {
    width: "90%",
    maxWidth: 400,
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 6, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  page: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a202c",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#4c51bf",
    borderRadius: 9999,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
