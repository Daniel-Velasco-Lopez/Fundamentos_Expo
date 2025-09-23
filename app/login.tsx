import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Easing,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  
  // Animaciones cósmicas (tu código existente)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleLogin = () => {
    // Navegar al dashboard
    router.push('/dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Icono cósmico animado */}
      <Animated.View 
        style={[
          styles.cosmicIcon,
          { 
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { rotate: rotateInterpolate }
            ]
          }
        ]}
      >
        <View style={styles.centerOrb} />
        <View style={[styles.orbit, styles.orbit1]} />
        <View style={[styles.orbit, styles.orbit2]} />
        <View style={styles.particle1} />
        <View style={styles.particle2} />
        <View style={styles.particle3} />
      </Animated.View>

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>ITT Tlaxiaco</Text>
        <Text style={[styles.text, styles.subtitle]}>Desarrollo Móvil</Text>
        <Text style={[styles.text, styles.name]}>Daniel Velasco López</Text>
        
        {/* Botón Ingresar */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1a2b",
    alignItems: "center",
    justifyContent: "center",
  },
  cosmicIcon: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  centerOrb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6A5ACD',
    shadowColor: '#6A5ACD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  orbit: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(106, 90, 205, 0.5)',
    borderRadius: 100,
  },
  orbit1: {
    width: 120,
    height: 120,
  },
  orbit2: {
    width: 180,
    height: 180,
  },
  particle1: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9370DB',
    top: 40,
    left: 40,
  },
  particle2: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#87CEEB',
    bottom: 60,
    right: 50,
  },
  particle3: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    top: 80,
    right: 30,
  },
  textContainer: {
    marginTop: 40,
    alignItems: "center",
    width: '80%',
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 6,
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#6A5ACD',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#6A5ACD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});