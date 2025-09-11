import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default function CardV2() {

    return (
        <View style={Styles.card}>
            <Image style={Styles.img} source={{ uri: 'https://www.bourguignonfloristas.es/media/webp_image/magefan_blog/tulipanes_amarillos_6.webp' }} />
            <View style={Styles.cardContent}>
                <Text style={Styles.Titulo}>Los Tulipanes</Text>
                <Text style={Styles.Contenido}> Los tulipanes son hermosos mas los rositas </Text>
                 {/* Boton Sombreado*/}
                        <TouchableOpacity style={[Styles.botonSombreado]}>
                            <Text style={Styles.textoBoton}> Ver Mas</Text>
                         </TouchableOpacity>
            </View>
        </View>
    );
}
const Styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        // padding: 5,
        shadowColor: '#000',
        elevation: 12,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: 16,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 },
    },
    cardContent: {
       padding: 16,
       backgroundColor:'#fff',
    },
    textoBoton:{
        color:'#18191bd4',
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:10,
        textAlign:'center',
    }, 


    Titulo: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    Contenido: {
        marginBottom: 12,
        fontSize: 12,
        color: '#333',
    },
    img: {
        width: 480,
        height: 100,
        alignSelf: 'center',
        // borderRadius:15,
    },
   
 botonSombreado:{
        backgroundColor:'#db9db9ff',
        paddingVertical:14,
        paddingHorizontal:18,
        borderRadius:10,
        // marginBottom:15,
        marginTop:10,
        alignSelf:'flex-start',
    },
});
