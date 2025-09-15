import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Botones from '../Tipos_botones/Botones';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image
          style={styles.image}
          source={{ uri: 'https://img.freepik.com/foto-gratis/fotografia-completa-adulto-montando-motocicleta-genial_23-2150868296.jpg' }}
        />
        <Text style={styles.h1}>Bienvenidos</Text>
        <Text style={styles.h2}>Aplicaciones Móviles</Text>
        <Botones />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff', // fondo blanco para claridad y limpieza
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 60,
  },
  contentWrapper: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#3B82F6', // borde azul moderno
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A', // azul profundo
    fontFamily: 'georgia',
    marginBottom: 8,
  },
  h2: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563EB', // azul más brillante
    fontFamily: 'georgia',
    marginBottom: 20,
    textAlign: 'center',
  },
});
