/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import Botones from '../tipos_botones/Botones';
 export default  function Home() {
  

  return (

    <SafeAreaView style={styles.container}>
          <Botones />
      <Image style={{width:150,height:150, borderRadius:59}} source={{ uri: 'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg ' }} /> 
      <Text style={styles.h1} >Bienvenidos A esta app</Text>
      <Text style={styles.h2} > A la materia de Aplicaciones moviles de Jaczibeth</Text>
    
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#91d9f8ff',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d0c0cff',
    fontFamily: 'georgia',
    borderRadius: 40,
    
   // backgroundColor: '#76a2d2ff',
  },
  h2: {fontSize: 16, fontWeight: 'bold',color: '#0d0c0cff',fontFamily: 'georgia',borderRadius: 40, padding: 15, alignContent: 'center',// backgroundColor: '#76a2d2ff',
  },
});

//export default Home; se puede omitir esta exportacion  ya que se aplica directamere nte en la declaracion de la funcion
