import { StyleSheet, Text, View } from "react-native";

export default function CardBasico() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>MIS FLORES FAVORITAS</Text>
      <Text style={styles.content}>Hablemos acerca de los Tulipanes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4, // Android
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E3A8A", // azul marino confiable
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: "#4B5563", // gris medio
    lineHeight: 20,
    textAlign: "justify",
  },
});
