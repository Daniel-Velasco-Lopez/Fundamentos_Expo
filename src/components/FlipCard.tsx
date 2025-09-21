import React, { ReactNode, useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

// Importa tus cards

type Variant = 'basico' | 'imagen' | 'v2' | 'v3';

type FlipCardProps = {
  front: ReactNode; // Contenido frontal del card
  back?: ReactNode; // Contenido del reverso
  containerStyle?: ViewStyle;
};

export default function FlipCard({ front, back, containerStyle }: FlipCardProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [flipped, setFlipped] = useState(false);

  const frontRotate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backRotate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flip = () => {
    Animated.spring(animatedValue, {
      toValue: flipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setFlipped(!flipped);
  };

  return (
    <TouchableWithoutFeedback onPress={flip}>
      <View style={[styles.container, containerStyle]}>
        {/* Frente */}
        <Animated.View
          pointerEvents={flipped ? 'none' : 'auto'}
          style={[
            styles.side,
            { transform: [{ perspective: 1000 }, { rotateY: frontRotate }] },
          ]}
        >
          {front}
        </Animated.View>

        {/* Reverso */}
        <Animated.View
          pointerEvents={flipped ? 'auto' : 'none'}
          style={[
            styles.side,
            styles.backSide,
            { transform: [{ perspective: 1000 }, { rotateY: backRotate }] },
          ]}
        >
          {back ?? (
            <View style={styles.defaultBackInner}>
              <Text style={styles.backText}>Información adicional</Text>
            </View>
          )}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
    position: 'relative',
  },
  side: {
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  backSide: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  defaultBackInner: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#1E3A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
