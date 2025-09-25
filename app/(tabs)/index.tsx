// app/(tabs)/index.tsx
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function TabIndex() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      
      <Link href="/pages/pantalla_inicio/Home" style={styles.link}>
        <Text style={styles.linkText}>Pantalla de Inicio</Text>
      </Link>
      
      <Link href="/pages/pantalla_inicio/HomePrincipal" style={styles.link}>
        <Text style={styles.linkText}>Home Principal</Text>
      </Link>
      
      <Link href="/pages/Formularios/Formulario" style={styles.link}>
        <Text style={styles.linkText}>Formulario 1</Text>
      </Link>
      
      <Link href="/pages/Formularios/FormularioV2" style={styles.link}>
        <Text style={styles.linkText}>Formulario 2</Text>
      </Link>
      
      <Link href="/pages/Lista_Alumnos/ListaAlumnos" style={styles.link}>
        <Text style={styles.linkText}>Lista de Alumnos</Text>
      </Link>
      
      <Link href="/pages/Navegacion/PantallaDoble" style={styles.link}>
        <Text style={styles.linkText}>Navegación</Text>
      </Link>
      
      <Link href="/pages/Tipos_botones/Botones" style={styles.link}>
        <Text style={styles.linkText}>Botones</Text>
      </Link>
      
      <Link href="/pages/Tipos_botones/BotonesV2" style={styles.link}>
        <Text style={styles.linkText}>Botones V2</Text>
      </Link>
      
      <Link href="/pages/CambioColor/ColorFondo" style={styles.link}>
        <Text style={styles.linkText}>Color de Fondo</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 8,
  },
  linkText: {
    fontSize: 16,
    fontWeight: '500',
  },
});