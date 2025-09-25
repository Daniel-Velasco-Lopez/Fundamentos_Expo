// app/(tabs)/explore.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar</Text>
      <Text>Esta es la pantalla de exploración</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});