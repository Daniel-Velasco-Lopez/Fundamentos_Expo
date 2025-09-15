import { MaterialIcons } from '@expo/vector-icons';
import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Formulario() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.formTitle}>Formulario De Daniel</Text>

        <Text style={styles.label}>Nombre:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="person" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre completo"
            placeholderTextColor="#64748B"
          />
        </View>

        <Text style={styles.label}>Carrera:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="school" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            editable={false}
            style={styles.input}
            placeholder="Escribe la carrera a la que perteneces"
            placeholderTextColor="#64748B"
          />
        </View>

        <Text style={styles.label}>Descripción:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="description" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textarea]}
            placeholder="Describe qué esperas de la materia de app móviles"
            placeholderTextColor="#64748B"
          />
        </View>

        <Text style={styles.label}>Correo Electrónico:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="email" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu correo"
            keyboardType="email-address"
            placeholderTextColor="#64748B"
          />
        </View>

        <Text style={styles.label}>Contraseña:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="lock" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="**************"
            secureTextEntry
            placeholderTextColor="#64748B"
          />
        </View>

        <Text style={styles.label}>Teléfono:</Text>
        <View style={styles.inputWrapper}>
          <MaterialIcons name="phone" size={20} color="#1E3A8A" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="9535563732"
            keyboardType="numeric"
            placeholderTextColor="#64748B"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="send" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.buttonText}>Enviar Formulario</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2FE', // fondo azul muy suave
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 20 : 44,
  },
  scrollContainer: {
    padding: 16,
  },
  formTitle: {
    fontFamily: 'Georgia',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#1E3A8A',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#1E3A8A',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#60A5FA', // azul llamativo
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#0F172A',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3A8A', // azul intenso profesional
    paddingVertical: 14,
    borderRadius: 16,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
