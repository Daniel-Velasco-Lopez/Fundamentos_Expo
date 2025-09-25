// app/screens/LoginScreen.tsx - VERSIÓN CORREGIDA
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

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();

  // Animaciones principales
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const nebulaRotate = useRef(new Animated.Value(0)).current;
  const starTwinkle = useRef(new Animated.Value(0)).current;

  // CORRECCIÓN: Sin ._value - usar valores fijos
  const orbitStarsAnim = useRef(
    Array.from({ length: 36 }, () => {
      const initialValue = Math.random() * 2 * Math.PI;
      return {
        animatedValue: new Animated.Value(initialValue),
        initialValue: initialValue
      };
    })
  ).current;

  // Estrellas fugaces
  const shootingStars = useRef(
    Array.from({ length: 8 }, () => new Animated.Value(0))
  ).current;

  // CORRECCIÓN: Partículas con valores fijos
  const floatingParticles = useRef(
    Array.from({ length: 25 }, () => {
      const initialX = Math.random() * width;
      const initialY = Math.random() * 400;
      return {
        x: new Animated.Value(initialX),
        y: new Animated.Value(initialY),
        opacity: new Animated.Value(0.5 + Math.random() * 0.5),
        rotate: new Animated.Value(0),
        size: Math.random() * 3 + 1,
        initialX,
        initialY
      };
    })
  ).current;

  useEffect(() => {
    // Fade de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(starTwinkle, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start();

    // Nebulosa rotando
    Animated.loop(
      Animated.timing(nebulaRotate, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // CORRECCIÓN: Animación estrellas orbitando con valores fijos
    orbitStarsAnim.forEach(({ animatedValue, initialValue }) => {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: initialValue + 2 * Math.PI,
          duration: 12000 + Math.random() * 8000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    });

    // Animación partículas flotantes simplificada
    floatingParticles.forEach(particle => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 0.2,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });

  }, []);

  const nebulaRotateInterpolate = nebulaRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cosmicScene}>
        {/* Partículas flotantes simplificadas */}
        {floatingParticles.map((particle, index) => (
          <Animated.View
            key={`particle-${index}`}
            style={[
              styles.floatingParticle,
              {
                left: particle.initialX,
                top: particle.initialY,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
              }
            ]}
          />
        ))}
        
        {/* Nebulosa simplificada */}
        <Animated.View style={[
          styles.nebulaContainer, 
          { 
            opacity: fadeAnim, 
            transform: [{rotate: nebulaRotateInterpolate}] 
          }
        ]}>
          <View style={styles.nebulaCore} />
        </Animated.View>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>ITT Tlaxiaco</Text>
        <Text style={[styles.text, styles.subtitle]}>Desarrollo Móvil</Text>
        <Text style={[styles.text, styles.name]}>Daniel Velasco López</Text>

        {/* CORRECCIÓN: Ruta actualizada */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#050818", 
    alignItems: "center", 
    justifyContent: "center" 
  },
  cosmicScene: { 
    width: width, 
    height: 400, 
    position: 'relative' 
  },
  floatingParticle: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  nebulaContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nebulaCore: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#483D8B',
  },
  textContainer: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 6,
  },
  name: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#4c51bf",
    borderRadius: 9999,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});