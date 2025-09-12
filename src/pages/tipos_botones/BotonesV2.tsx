import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function BotonesV2() {
  return (
    <View style={styles.mainS}>  
       <Text style={styles.title}>Botones personalizados</Text>
       {/* Boton 1 G*/}
         <TouchableOpacity style={styles.botonG}>
            <Text style={styles.textobotong}> Boton G</Text>
         </TouchableOpacity>
         {/* Boton g con icono*/}
        <TouchableOpacity style={styles.botonGIcon}>
              <Icon name="send"  size={20} color={'#fff' } style={styles.botonGico }/>
            <Text style={styles.textobotong}> Boton G</Text>
         </TouchableOpacity>
        {/* Boton Sombreado*/}
        <TouchableOpacity style={[styles.botonSombreado, styles.sombra]}>
            <Text style={styles.textobotong}> Boton Sombreado</Text>
         </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#91d9f8ff',
    paddingTop:Platform.OS === 'android' ?  StatusBar.currentHeight:44, 
    padding:16
  },
    title:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:16
     },
    botonG:{
    backgroundColor:'#e8eef4ff',
    padding:10,
    borderRadius:40,
    marginTop:16,
    alignSelf:'center',
    },

    textobotong:{
    color:'#18191bd4',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',},

    botonGIcon:{
        backgroundColor:'#f86cabff',
        marginTop:10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:15,
    },
   botonGico :{
        marginRight:8,
    },
    botonSombreado:{
        backgroundColor:'#db9db9ff',
        paddingVertical:14,
        borderRadius:10,
        marginBottom:10,
        marginTop:10,
    },
    sombra:{ 
        ...Platform.select({
            android:{
                elevation:6,
            },
            ios:{
                shadowColor:'#000',
                shadowOffset:{width:0, height:2},
                shadowOpacity:0.3,
                shadowRadius:4,
      },
    }),
}
});
