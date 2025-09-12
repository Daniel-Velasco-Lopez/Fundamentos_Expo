import { MaterialIcons } from '@expo/vector-icons'; // <- Expo Icons
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Formulario() {
  return (
    <SafeAreaView style={styles.mainS}>
      <Text style={styles.form}>Formulario De Daniel</Text>

      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input1} placeholder="Escribe tu nombre completo" />

      <Text style={styles.label}>Carrera:</Text>
      <TextInput editable={false} style={styles.input1} placeholder="Escribe la carrera a la que perteneces" />

      <Text style={styles.label}>Descripcion:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        style={[styles.input1, styles.textarea]}
        placeholder="Describe que esperas de la materia de app moviles"
      />

      <Text style={styles.label}>Correo Electronico:</Text>
      <TextInput style={styles.input1} placeholder="Ingresa tu correo" keyboardType="email-address" />

      <Text style={styles.label}>Contraseña:</Text>
      <TextInput style={styles.input1} placeholder="**************" secureTextEntry />

      <Text style={styles.label}>Telefono:</Text>
      <TextInput style={styles.input1} placeholder="9535563732" keyboardType="numeric" />

      <TouchableOpacity style={styles.botonGIcon}>
        <MaterialIcons name="send" size={20} color="#fff" style={styles.botonGico} />
        <Text style={styles.textobotong}>Enviar Formulario</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#d4edf7ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    padding: 16,
  },
  form: {
    fontFamily: 'georgia',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  input1: {
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: '#92c3ffff',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  textarea: {
    height: 100,
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  textobotong: {
    color: '#18191bd4',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  botonGIcon: {
    backgroundColor: '#f0b2ceff',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
  },
  botonGico: {
    marginRight: 10,
  },
});
