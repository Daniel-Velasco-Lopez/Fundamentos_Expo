import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import CardBasico from '../../components/CardBasico';
import CardImagen from '../../components/CardImagen';
import CardV2 from '../../components/CardV2';
import CardV3 from '../../components/CardV3';


export default function HomePrincipal() {
  
  return (
    
    <ScrollView>
   <View style={styles.mainS}>  
        <Text style={styles.title}>Pagina Principal</Text>
     <CardBasico/>
     <CardImagen/>
     <CardV2/>
     <CardV3/>
    </View>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#F3F4F6', // gris muy claro, más profesional
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
    color: '#1E3A8A', // azul marino confiable
  },
});

