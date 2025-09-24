import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// El componente principal de la aplicación.
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = () => {
    const colors = ['#FFC0CB', '#ADD8E6', '#90EE90', '#F08080', '#DDA0DD', '#87CEEB'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomIndex];
    setBackgroundColor(newColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>
        Toca el botón para cambiar el color de fondo.
      </Text>

      <TouchableOpacity onPress={changeBackgroundColor} style={styles.button}>
        <Text style={styles.buttonText}>Cambiar Color</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos en React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: '#4F46E5',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
