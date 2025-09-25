import CardBasico from '@/app/src/components/CardBasico';
import CardImagen from '@/app/src/components/CardImagen';
import CardV2 from '@/app/src/components/CardV2';
import CardV3 from '@/app/src/components/CardV3';
import FlipCard from '@/app/src/components/FlipCard';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomePrincipal() {
  return (
    <ScrollView>
      <View style={styles.mainS}>
        <Text style={styles.title}>Pagina Principal</Text>

        {/* CardBasico con reverso */}
        <FlipCard
          front={<CardBasico />}
          back={
            <View style={styles.backCard}>
              <Text style={styles.backText}>Información extra de CardBasico</Text>
            </View>
          }
        />

        {/* CardImagen con reverso */}
        <FlipCard
          front={<CardImagen />}
          back={
            <View style={styles.backCard}>
              <Text style={styles.backText}>Detalles adicionales de CardImagen</Text>
            </View>
          }
        />

        {/* CardV2 con reverso */}
        <FlipCard
          front={<CardV2 />}
          back={
            <View style={styles.backCard}>
              <Text style={styles.backText}>Más info de CardV2</Text>
            </View>
          }
        />

        {/* CardV3 con reverso */}
        <FlipCard
          front={<CardV3 />}
          back={
            <View style={styles.backCard}>
              <Text style={styles.backText}>Notas extra de CardV3</Text>
            </View>
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
    color: '#1E3A8A',
  },
  backCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E3A8A',
    borderRadius: 12,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
