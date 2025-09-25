import { Image, StyleSheet, Text, View } from "react-native";

export default function CardImagen() {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://i.pinimg.com/1200x/b2/cb/a5/b2cba594a503b134907f9665a186d2c9.jpg',
        }}
      />
      <Text style={styles.title}>MOTOCICLETAS</Text>
      <Text style={styles.content}>Las motocicletas son vehículos de dos ruedas</Text>
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
    color: "#1E3A8A", // azul confiable
    marginTop: 8,
    marginBottom: 6,
  },
  content: {
    fontSize: 14,
    color: "#4B5563", // gris profesional
    lineHeight: 20,
    textAlign: "justify",
  },
  img: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    marginBottom: 12,
  },
});
