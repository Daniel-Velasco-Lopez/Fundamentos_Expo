// creacion del listado alumnos
import React from 'react';
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
export const ListaAlumnos = () => {
    return (
        <SafeAreaView style={styles.mainS}>
            {/* Inicio de AppBar  */}
            <View style={styles.appBar}>
                <Icon name='arrow-left' size={20} color={'#000000ff'} />
                <Text style={styles.appBarTitle}>Lista de usuarios</Text>
                <View style={{ width: 20 }}></View>
            </View>
            {/* Cierre de AppBar */}
            {/* inicio de contenido de lista  alumnos */}
            <ScrollView style={{ padding: 16 }}>
                <Text style={styles.sectionTitle}>Alumnos de  aplicaciones moviles</Text>
                {/* Aplicacion del map, que se encarga de iterar sin necesidad de aplicar codigo c/u */}
                
                {[1, 2,3,4,5,6,7].map(() => (
                <View  style={styles.card} >
                    <Image source={{ uri: 'https://i.pinimg.com/originals/d5/ac/a0/d5aca0cd3681d4a0c0883644f19f1762.jpg' }} style={styles.avatar}/>
                    <View style={styles.cardInfo}>
                    <Text style={styles.userName}>Jaczibeth Cruz </Text>
                    <Text style={styles.userDetails}>Ing. Sistemas Computacionales</Text>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Ver más</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                ))}
            </ScrollView>
            {/* final de contenido lista alumnos */}
            {/* navbar */}
            <View style={styles.navbar}>
                <View style={styles.navItem}> 
                    <Icon name='bell' size={20} color={'#0f0e0eff'}/>
                        <Text style={styles.navtext}> Inicio</Text>
                </View>
                <View style={styles.navItem}> 
                    <Icon name='home' size={20} color={'#0f0e0eff'}/>
                        <Text style={styles.navtext}> Inicio</Text>
                </View>
                <View style={styles.navItem}> 
                    <Icon name='cog' size={20} color={'#0f0e0eff'}/>
                        <Text style={styles.navtext}> Inicio</Text>
                </View>

            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    mainS: {
        flex: 1,
        backgroundColor: '#f3e5f7f5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        // padding: 16
    },
    appBar: {
        height: 50,
        backgroundColor: '#bed6f2ff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: ' 100%',


    },
    appBarTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {

        fontSize: 14,
        fontWeight: 'bold',
        padding: 16

    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginRight: 12,

    },
    card: {
        padding: 16,
        flexDirection: 'row',
        borderRadius: 16,
        backgroundColor: '#e5f6ffff',
        elevation: 2,
        marginBottom: 5,

    },
    cardInfo: {
        flex: 1,
        alignContent: 'center'
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userDetails: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#f86cabff',
        marginTop: 10,
        paddingVertical: 6,
        borderRadius: 15,
        alignSelf: 'flex-end',
        padding: 10,
    },
    saveButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:70,
        backgroundColor:'#c8daf5ff ',
        // marginBottom:10,
        borderTopWidth:1,
    },
    navItem:{
        alignItems:'center',
    },
    navtext:{
        fontSize:12,
        color:'#0a0a0aff',
        marginTop: 4,
    }

});