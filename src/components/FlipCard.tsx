import { useRef, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

type FlipCardProps = {
  front: React.ReactNode; // contenido del frente
  back: React.ReactNode;  // contenido del reverso
  style?: ViewStyle;      // estilos opcionales para el contenedor
};

export default function FlipCard({ front, back, style }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(animatedValue, {
      toValue: flipped ? 0 : 180,
      useNativeDriver: true,
    }).start();
    setFlipped(!flipped);
  };

  return (
    <TouchableOpacity onPress={flipCard} activeOpacity={0.9}>
      <View style={[styles.cardContainer, style]}>
        {/* Frente */}
        <Animated.View style={[styles.card, { transform: [{ rotateY: frontInterpolate }] }]}>
          {front}
        </Animated.View>

        {/* Reverso */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ rotateY: backInterpolate }] },
          ]}
        >
          {back}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    minHeight: 150,
    borderRadius: 16,
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardBack: {
    backgroundColor: '#1E3A8A',
    position: 'absolute',
    top: 0,
  },
});
