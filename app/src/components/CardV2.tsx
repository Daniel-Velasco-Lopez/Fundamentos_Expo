import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardV2() {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://i.pinimg.com/736x/e5/8c/02/e58c02434b6e11313a98446ebb70058d.jpg',
        }}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>LAS MOTOCICLETAS</Text>
        <Text style={styles.content}>Las motocicletas son vehículos de dos ruedas</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    overflow: "hidden",
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
    marginBottom: 12,
  },
  img: {
    width: "100%",
    height: 180,
    borderRadius: 16,
  },
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
});
