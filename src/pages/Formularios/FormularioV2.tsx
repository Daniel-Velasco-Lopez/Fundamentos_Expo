import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function FormularioV2() {
  return (
    <SafeAreaView style={styles.mainS}>
      <ScrollView>
        <Text style={styles.form}>Formulario versión 2</Text>
 
        <View style={styles.container}>
          <TouchableOpacity style={styles.cerrarButton}>
            <MaterialIcons name="close" size={24} color="#100f0fff" />
          </TouchableOpacity>

          <Image
            source={{ uri: 'https://i.pinimg.com/474x/09/a4/f5/09a4f59d5724e831db81caec46ef64ee.jpg' }}
            style={styles.avatar}
          />

          <Text style={styles.name}>Daniel Velasco López</Text>

          <View style={styles.infocontainer}>
            {/* Cada campo con ícono */}
            {(() => {
              // Import KeyboardTypeOptions from react-native
              type KeyboardType = import('react-native').KeyboardTypeOptions;
              const fields: {
                label: string;
                placeholder: string;
                icon: keyof typeof MaterialIcons.glyphMap;
                editable?: boolean;
                keyboardType?: KeyboardType;
              }[] = [
                { label: 'Carrera', placeholder: 'Ing en Sistemas Computacionales', icon: 'school', editable: false },
                { label: 'Especialidad', placeholder: 'Desarrollo de Software', icon: 'code', editable: false },
                { label: 'Semestre', placeholder: 'Séptimo', icon: 'layers', editable: false },
                { label: 'Número de control', placeholder: '22620076', icon: 'badge', editable: false },
                { label: 'Teléfono', placeholder: '9535563732', icon: 'phone', keyboardType: 'numeric' as KeyboardType },
                { label: 'Correo', placeholder: '22620076@tlaxiaco.tecnm.mx', icon: 'email', keyboardType: 'email-address' as KeyboardType },
              ];
              return fields.map((field, index) => (
                <View style={styles.inputWrapper} key={index}>
                  <MaterialIcons name={field.icon} size={20} color="#1E3A8A" style={styles.iconInside} />
                  <TextInput
                    style={styles.input}
                    placeholder={field.placeholder}
                    editable={field.editable !== false}
                    keyboardType={field.keyboardType ?? 'default'}
                  />
                </View>
              ));
            })()}

            <TouchableOpacity style={styles.botonGIcon}>
              <MaterialIcons name="save" size={20} color="#fff" style={styles.botonGico} />
              <Text style={styles.textobotong}>Guardar Datos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    padding: 16,
    backgroundColor: '#E0F2FE',
  },
  form: {
    fontFamily: 'Georgia',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 16,
    color: '#1E3A8A',
  },
  container: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 24,
    marginTop: 20,
    backgroundColor: '#BEE3F8',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 15,
    elevation: 5,
  },
  avatar: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#93C5FD',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    borderRadius: 20,
    backgroundColor: '#60A5FA',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  infocontainer: {
    width: '100%',
    paddingBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  iconInside: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 45,
    paddingLeft: 36,
    borderRadius: 12,
    backgroundColor: '#DBEAFE',
    fontSize: 16,
    fontWeight: '500',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  textobotong: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  botonGIcon: {
    backgroundColor: '#1E3A8A',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  botonGico: {
    marginRight: 10,
  },
  cerrarButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    alignItems: 'center',
    elevation: 3,
  },
});
