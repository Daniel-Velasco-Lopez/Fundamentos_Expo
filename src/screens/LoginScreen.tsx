import React, { useEffect, useRef } from "react";
import {
    Animated,
    Dimensions,
    Easing,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from "react-native";

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  // Animaciones para el efecto cósmico
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const nebulaRotate = useRef(new Animated.Value(0)).current;
  const particleMove = useRef(new Animated.Value(0)).current;
  const starTwinkle = useRef(new Animated.Value(0)).current;
  const shootingStarAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animación de entrada espectacular
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(particleMove, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(starTwinkle, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    ]).start();

    // Nebulosa rotando continuamente
    Animated.loop(
      Animated.timing(nebulaRotate, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Estrella fugace cada 5 segundos
    Animated.loop(
      Animated.sequence([
        Animated.timing(shootingStarAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.delay(3500),
      ])
    ).start();
  }, []);

  const nebulaRotateInterpolate = nebulaRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const particleMoveInterpolate = particleMove.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -width],
  });

  const shootingStarInterpolate = shootingStarAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, width + 100],
  });

  const shootingStarOpacity = shootingStarAnim.interpolate({
    inputRange: [0, 0.3, 0.7, 1],
    outputRange: [0, 1, 0.8, 0],
  });

  // Crear nebulosa central (como en la referencia)
  const renderNebula = () => (
    <Animated.View 
      style={[
        styles.nebulaContainer,
        { 
          opacity: fadeAnim,
          transform: [{ rotate: nebulaRotateInterpolate }]
        }
      ]}
    >
      {/* Núcleo brillante */}
      <View style={styles.nebulaCore}>
        <View style={styles.coreInnerGlow} />
        <View style={styles.coreOuterGlow} />
      </View>
      
      {/* Anillos de gas cósmico */}
      <View style={[styles.gasRing, styles.gasRing1]} />
      <View style={[styles.gasRing, styles.gasRing2]} />
      <View style={[styles.gasRing, styles.gasRing3]} />
      
      {/* Cúmulos estelares */}
      <View style={[styles.starCluster, styles.cluster1]} />
      <View style={[styles.starCluster, styles.cluster2]} />
      <View style={[styles.starCluster, styles.cluster3]} />
      <View style={[styles.starCluster, styles.cluster4]} />
    </Animated.View>
  );

  // Partículas flotantes (efecto de polvo estelar)
  const renderFloatingParticles = () => {
    const particles = [
      { id: 1, size: 1, startX: 50, startY: 100, duration: 8000 },
      { id: 2, size: 2, startX: width - 70, startY: 150, duration: 6000 },
      { id: 3, size: 1, startX: 120, startY: 250, duration: 7000 },
      { id: 4, size: 3, startX: width - 120, startY: 200, duration: 9000 },
    ];

    return particles.map(particle => (
      <Animated.View
        key={particle.id}
        style={[
          styles.floatingParticle,
          {
            width: particle.size,
            height: particle.size,
            borderRadius: particle.size / 2,
            left: particle.startX,
            top: particle.startY,
            opacity: fadeAnim,
            transform: [{
              translateX: particleMoveInterpolate.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -width * (1 + Math.random())]
              })
            }]
          },
        ]}
      />
    ));
  };

  // Estrellas centelleantes
  const renderTwinklingStars = () => {
    const stars = [
      { id: 1, top: 80, left: 100, size: 2 },
      { id: 2, top: 120, left: width - 60, size: 3 },
      { id: 3, top: 180, left: 70, size: 1 },
      { id: 4, top: 220, left: width - 90, size: 2 },
      { id: 5, top: 280, left: 150, size: 4 },
      { id: 6, top: 140, left: width - 150, size: 2 },
    ];

    return stars.map(star => (
      <Animated.View
        key={star.id}
        style={[
          styles.twinklingStar,
          {
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            borderRadius: star.size / 2,
            opacity: starTwinkle.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [0.3, 1, 0.3],
            }),
          },
        ]}
      />
    ));
  };

  // Estrella fugaz
  const renderShootingStar = () => (
    <Animated.View
      style={[
        styles.shootingStar,
        {
          opacity: shootingStarOpacity,
          transform: [{
            translateX: shootingStarInterpolate
          }, {
            translateY: shootingStarAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 250]
            })
          }]
        }
      ]}
    >
      <View style={styles.shootingStarHead} />
      <View style={styles.shootingStarTail} />
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cosmicScene}>
        {renderFloatingParticles()}
        {renderTwinklingStars()}
        {renderNebula()}
        {renderShootingStar()}
        
        {/* Capa de overlay para efecto de profundidad */}
        <View style={styles.spaceOverlay} />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>ITT Tlaxiaco</Text>
        <Text style={[styles.text, styles.subtitle]}>Desarrollo Móvil</Text>
        <Text style={[styles.text, styles.name]}>Daniel Velasco López</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050818", // Fondo espacio profundo
    alignItems: "center",
    justifyContent: "center",
  },
  cosmicScene: {
    width: width,
    height: 400,
    position: 'relative',
    overflow: 'hidden',
  },
  spaceOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  // Nebulosa central
  nebulaContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nebulaCore: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6A5ACD',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 30,
    elevation: 20,
  },
  coreInnerGlow: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#9370DB',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  coreOuterGlow: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(106, 90, 205, 0.3)',
  },
  gasRing: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'rgba(147, 112, 219, 0.4)',
  },
  gasRing1: {
    width: 120,
    height: 120,
    top: 40,
    left: 40,
  },
  gasRing2: {
    width: 160,
    height: 160,
    top: 20,
    left: 20,
  },
  gasRing3: {
    width: 200,
    height: 200,
    top: 0,
    left: 0,
  },
  starCluster: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 1,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  cluster1: { top: 30, left: 30, width: 2, height: 2 },
  cluster2: { top: 160, left: 160, width: 3, height: 3 },
  cluster3: { top: 80, left: 120, width: 1, height: 1 },
  cluster4: { top: 120, left: 40, width: 2, height: 2 },
  // Partículas flotantes
  floatingParticle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  // Estrellas centelleantes
  twinklingStar: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  // Estrella fugaz
  shootingStar: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shootingStarHead: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  shootingStarTail: {
    width: 40,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 2,
  },
  // Texto
  textContainer: {
    marginTop: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    color: '#E6E6FA',
    textShadowColor: 'rgba(147, 112, 219, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  subtitle: {
    fontSize: 22,
    marginBottom: 6,
    color: '#D8BFD8',
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
    color: '#DDA0DD',
  },
});


