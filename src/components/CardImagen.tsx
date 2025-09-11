import { Image, StyleSheet, Text, View } from "react-native";

export default function CardImagen() {

    return (
        
        <View style={Styles.card}>
             <Image  style={Styles.img} source={{ uri: 'https://www.bourguignonfloristas.es/media/webp_image/wysiwyg/Calendario_floral_Bourguignon6.webp'  }} />
             <Text  style={Styles.Titulo}>Tulipanes</Text>
             <Text  style={Styles.Contenido}> Los tulipanes son mis flores favoritas </Text>
               
        </View>
        


    );
}
const Styles = StyleSheet.create({ 
    card:{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        shadowColor:'#000',
        elevation:12,
        shadowOpacity:0.5,
        shadowRadius:10,
        marginTop:16
        },
    Titulo:{
        marginTop:5,
        fontSize:14 ,
        fontWeight:'bold',
    },
    Contenido:{
        marginTop:6,
        textAlign:'justify',
    },
    img:{
        width:350,
        height:150,
        alignSelf:'center',
        borderRadius:15,
        marginBottom:8,
    }
});
