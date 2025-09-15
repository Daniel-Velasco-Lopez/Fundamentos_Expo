import { MaterialIcons } from '@expo/vector-icons';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BotonesV2() {
  return (
    <View style={styles.mainS}>  
      <Text style={styles.title}>Botones personalizados</Text>

      {/* Botón grande */}
      <TouchableOpacity style={styles.botonG}>
        <Text style={styles.textobotong}>Botón G</Text>
      </TouchableOpacity>

      {/* Botón grande con icono */}
      <TouchableOpacity style={styles.botonGIcon}>
        <MaterialIcons name="send" size={20} color={'#fff'} style={styles.botonGico}/>
        <Text style={styles.textobotongIcon}>Botón G</Text>
      </TouchableOpacity>

      {/* Botón sombreado */}
      <TouchableOpacity style={[styles.botonSombreado, styles.sombra]}>
        <Text style={styles.textobotong}>Botón Sombreado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#F3E8FF', // Lavanda suave, moderno y cálido
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44, 
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    color: '#1F2937',
  },
  botonG: {
    backgroundColor: '#FBBF24', // Amarillo cálido
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginTop: 16,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  textobotong: {
    color: '#1F2937',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  botonGIcon: {
    backgroundColor: '#3B82F6',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  botonGico: {
    marginRight: 10,
  },
  textobotongIcon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  botonSombreado: {
    backgroundColor: '#10B981', // Verde confiable
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 25,
    marginTop: 16,
    alignSelf: 'center',
  },
  sombra: { 
    ...Platform.select({
      android: { elevation: 6 },
      ios: { 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
      },
    }),
  },
});
