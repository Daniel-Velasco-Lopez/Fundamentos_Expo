import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const { width } = Dimensions.get('window');

// Íconos usando texto/emoji como alternativa
const IconText = ({ icon, color }: { icon: string; color: string }) => (
  <View style={[styles.iconContainer, { backgroundColor: `${color}20` }]}>
    <Text style={[styles.iconText, { color }]}>{icon}</Text>
  </View>
);

export default function Dashboard() {
  const router = useRouter();

  const components = [
    {
      title: "Home Principal",
      icon: "🏠",
      screen: "/home-principal",
      color: "#4CAF50",
      description: "Pantalla principal de la aplicación"
    },
    {
      title: "Home",
      icon: "🌎",
      screen: "/home",
      color: "#2196F3",
      description: "Vista general del sistema"
    },
    {
      title: "Lista Alumnos",
      icon: "👥",
      screen: "/lista-alumnos",
      color: "#FF9800",
      description: "Gestión de estudiantes"
    },
    {
      title: "Formulario",
      icon: "📝",
      screen: "/formulario",
      color: "#9C27B0",
      description: "Formulario básico"
    },
    {
      title: "Formulario V2",
      icon: "✏️",
      screen: "/formulario-v2",
      color: "#F44336",
      description: "Formulario avanzado"
    }
  ];

  const navigateToScreen = (screen: string) => {
    router.push(screen as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.headerSubtitle}>Componentes de la App</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {components.map((component, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.card, { borderLeftColor: component.color }]}
              onPress={() => navigateToScreen(component.screen)}
            >
              <IconText icon={component.icon} color={component.color} />
              
              <Text style={styles.cardTitle}>{component.title}</Text>
              <Text style={styles.cardDescription}>{component.description}</Text>
              
              <View style={styles.arrowContainer}>
                <Text style={styles.arrowText}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#0f1a2b",
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerSubtitle: {
    color: "#CCCCCC",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: (width - 48) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  arrowText: {
    fontSize: 24,
    color: '#666',
    fontWeight: 'bold',
  },
});