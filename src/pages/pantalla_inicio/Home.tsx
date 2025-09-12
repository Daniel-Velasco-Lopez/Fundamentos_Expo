import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import Botones from '../Tipos_botones/Botones';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://img.freepik.com/foto-gratis/fotografia-completa-adulto-montando-motocicleta-genial_23-2150868296.jpg' }}
      />
      <Text style={styles.h1}>Bienvenidos A esta app</Text>
      <Text style={styles.h2}>Aplicaciones Móviles</Text>
      <Botones />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#91d9f8ff',
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 60,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20, // separa la imagen del texto
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d0c0cff',
    fontFamily: 'georgia',
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0d0c0cff',
    fontFamily: 'georgia',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
