import { FontAwesome } from '@expo/vector-icons';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Botones() {
  return (
    <View style={styles.mainS}>  
        <Text style={styles.h1}>Botones</Text>

        {/* Boton 1*/}
        <TouchableOpacity style={styles.botonbasico}>
            <Text style={styles.text}> Boton 1</Text>
        </TouchableOpacity>

        {/* Boton con icono*/}
        <TouchableOpacity style={styles.botonIcono}>
            <FontAwesome name="rocket" size={20} style={styles.iconB}/>
            <Text style={styles.textIcono}> Boton Icono </Text>
        </TouchableOpacity>

        {/* Boton con icono 2 */}
        <TouchableOpacity style={styles.botonIcono}>
            <FontAwesome name="user" size={20} style={styles.iconRight}/>
            <Text style={styles.textIcono}> Boton Usuario </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#F3E8FF', // Lavanda suave, moderno y profesional
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44, 
    padding: 16,
  },
  h1: {
    fontSize: 24,
    color: '#1F2937',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  botonbasico: {
    backgroundColor: '#FBBF24', // Amarillo cálido
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  text:{
    color: '#1F2937',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  botonIcono: {
    backgroundColor: '#3B82F6', // Azul vibrante para iconos
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  textIcono: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconB: {
    color: '#fff',
    marginRight: 10,
  },
  iconRight: {
    color: '#fff',
    marginRight: 10,
  },
});
