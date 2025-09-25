// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Rutas de páginas */}
        <Stack.Screen name="pages/pantalla_inicio/Home" options={{ title: 'Inicio' }} />
        <Stack.Screen name="pages/pantalla_inicio/HomePrincipal" options={{ title: 'Home Principal' }} />
        <Stack.Screen name="pages/Formularios/Formulario" options={{ title: 'Formulario 1' }} />
        <Stack.Screen name="pages/Formularios/FormularioV2" options={{ title: 'Formulario 2' }} />
        <Stack.Screen name="pages/Lista_Alumnos/ListaAlumnos" options={{ title: 'Lista de Alumnos' }} />
        <Stack.Screen name="pages/Navegacion/PantallaDoble" options={{ title: 'Navegación' }} />
        <Stack.Screen name="pages/Tipos_botones/Botones" options={{ title: 'Botones' }} />
        <Stack.Screen name="pages/Tipos_botones/BotonesV2" options={{ title: 'Botones V2' }} />
        <Stack.Screen name="pages/CambioColor/ColorFondo" options={{ title: 'Color de Fondo' }} />
        
        {/* Ruta del menú */}
        <Stack.Screen name="menu/MenuScreen" options={{ title: 'Menú' }} />
        
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}