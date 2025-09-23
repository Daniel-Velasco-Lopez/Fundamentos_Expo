import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    SafeAreaView,
    Text,
    TouchableOpacity
} from "react-native";

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  
  // ... (todo tu código existente de LoginScreen con las animaciones cósmicas)
  
  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tu código de LoginScreen con animaciones */}
      {/* ... */}
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Tus estilos...