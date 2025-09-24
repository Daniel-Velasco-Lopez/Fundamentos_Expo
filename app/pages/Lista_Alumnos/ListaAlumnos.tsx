import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function ListaAlumnos() {
  return (
    <SafeAreaView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <FontAwesome name='arrow-left' size={20} color={'#6B4226'} />
        <Text style={styles.appBarTitle}>Usuarios AM</Text>
        <View style={{ width: 20 }} />
      </View>

      {/* Contenido */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Alumnos de AM</Text>
        {[1,2,3,4,5,6,7].map(item => (
          <View key={item} style={styles.card}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/c9/94/20/c9942073e962631827d02c0c7c684414.jpg' }}
              style={styles.avatar}
            />
            <View style={styles.cardContent}>
              <Text style={styles.userName}>Daniel Velasco López</Text>
              <Text style={styles.userDetails}>Ing. Sistemas Computacionales</Text>
              <TouchableOpacity style={styles.detailsButton}>
                <FontAwesome name="eye" size={16} color="#fff" />
                <Text style={styles.detailsButtonText}>Detalles</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <View style={styles.navItem}>
          <FontAwesome name='bell' size={22} color='#6B4226' />
          <Text style={styles.navText}>Alertas</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome name='home' size={22} color='#6B4226' />
          <Text style={styles.navText}>Inicio</Text>
        </View>
        <View style={styles.navItem}>
          <FontAwesome name='cog' size={22} color='#6B4226' />
          <Text style={styles.navText}>Ajustes</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // blanco puro
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  appBar: {
    height: 60,
    backgroundColor: '#FFE4C4', // melocotón suave
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0C097',
  },
  appBarTitle: {
    color: '#6B4226',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 90,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4226',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFE4C4', // card coral suave
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#FFD700', // borde dorado
  },
  cardContent: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B4226',
    marginBottom: 4,
  },
  userDetails: {
    fontSize: 14,
    color: '#4B3832',
    marginBottom: 8,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#228B22', // verde profesional
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFE4C4', // melocotón suave
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0C097',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 3,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#6B4226',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});
