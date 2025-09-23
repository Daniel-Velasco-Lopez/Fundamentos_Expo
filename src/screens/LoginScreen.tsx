import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  // Animaciones principales
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const nebulaRotate = useRef(new Animated.Value(0)).current;
  const nebulaPulse = useRef(new Animated.Value(1)).current;
  const starTwinkle = useRef(new Animated.Value(0)).current;

  // Animaciones de estrellas orbitando
  const orbitStarsAnim = useRef(
    Array.from({ length: 36 }, () => new Animated.Value(Math.random() * 2 * Math.PI))
  ).current;

  // Estrellas fugaces
  const shootingStars = useRef(
    Array.from({ length: 8 }, () => new Animated.Value(0))
  ).current;

  // Partículas flotantes
  const floatingParticles = useRef(
    Array.from({ length: 25 }, () => ({
      x: new Animated.Value(Math.random() * width),
      y: new Animated.Value(Math.random() * 400),
      opacity: new Animated.Value(0.5 + Math.random() * 0.5),
      rotate: new Animated.Value(0),
      size: Math.random() * 3 + 1,
      moveX: Math.random() * 100 + 50,
      moveY: Math.random() * 50 + 30,
      duration: Math.random() * 4000 + 4000
    }))
  ).current;

  useEffect(() => {
    // Fade de entrada y estrellas centelleando
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(starTwinkle, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      })
    ]).start();

    // Nebulosa rotando y pulsando
    Animated.loop(
      Animated.parallel([
        Animated.timing(nebulaRotate, {
          toValue: 1,
          duration: 20000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(nebulaPulse, {
              toValue: 1.15,
              duration: 4000,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(nebulaPulse, {
              toValue: 1,
              duration: 4000,
              easing: Easing.inOut(Easing.ease),
              useNativeDriver: true,
            }),
          ])
        )
      ])
    ).start();

    // Animación estrellas orbitando
    orbitStarsAnim.forEach((anim, index) => {
      Animated.loop(
        Animated.timing(anim, {
          toValue: anim._value + 2 * Math.PI,
          duration: 12000 + Math.random() * 8000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    });

    // Animación estrellas fugaces
    shootingStars.forEach(star => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(star, {
            toValue: 1,
            duration: 1200 + Math.random() * 1500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.delay(2000 + Math.random() * 3000),
          Animated.timing(star, { toValue: 0, duration: 0, useNativeDriver: true })
        ])
      ).start();
    });

    // Animación partículas flotantes
    floatingParticles.forEach(p => {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(p.x, { toValue: p.x._value + p.moveX, duration: p.duration, easing: Easing.linear, useNativeDriver: true }),
            Animated.timing(p.x, { toValue: p.x._value, duration: p.duration, easing: Easing.linear, useNativeDriver: true })
          ]),
          Animated.sequence([
            Animated.timing(p.y, { toValue: p.y._value + p.moveY, duration: p.duration, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
            Animated.timing(p.y, { toValue: p.y._value, duration: p.duration, easing: Easing.inOut(Easing.sin), useNativeDriver: true })
          ]),
          Animated.loop(
            Animated.sequence([
              Animated.timing(p.opacity, { toValue: 0.2, duration: p.duration/2, useNativeDriver: true }),
              Animated.timing(p.opacity, { toValue: 1, duration: p.duration/2, useNativeDriver: true }),
            ])
          ),
          Animated.loop(
            Animated.timing(p.rotate, { toValue: 360, duration: p.duration*2, easing: Easing.linear, useNativeDriver: true })
          )
        ])
      ).start();
    });

  }, []);

  const nebulaRotateInterpolate = nebulaRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Render nebulosa con anillos y estrellas orbitando
  const renderNebula = () => {
    const ringStars = [];
    const ringColors = ['#FFFFFF','#87CEFA','#BA55D3','#E6E6FA','#DDA0DD'];
    const orbits = [60, 90, 120];

    orbitStarsAnim.forEach((anim, i) => {
      const radius = orbits[Math.floor(i / 12)];
      const x = anim.interpolate({ inputRange: [0, 2*Math.PI], outputRange: [radius, -radius] });
      const y = anim.interpolate({ inputRange: [0, 2*Math.PI], outputRange: [0, 0] }); // eje vertical
      const opacity = anim.interpolate({ inputRange: [0, Math.PI, 2*Math.PI], outputRange: [0.3,1,0.3] });

      ringStars.push(
        <Animated.View
          key={`ringStar-${i}`}
          style={[styles.orbitStar, { transform:[{translateX:x},{translateY:y}], opacity, backgroundColor:ringColors[i%ringColors.length] }]}
        />
      );
    });

    return (
      <Animated.View style={[styles.nebulaContainer, { opacity:fadeAnim, transform:[{rotate:nebulaRotateInterpolate},{scale:nebulaPulse}] }]}>
        <View style={styles.nebulaCore}>
          <View style={styles.coreInnerGlow}/>
          <View style={styles.coreOuterGlow}/>
        </View>
        <View style={[styles.gasRing, styles.gasRing1]} />
        <View style={[styles.gasRing, styles.gasRing2]} />
        <View style={[styles.gasRing, styles.gasRing3]} />
        {ringStars}
      </Animated.View>
    );
  }

  // Render partículas flotantes
  const renderFloatingParticles = () => {
    return floatingParticles.map((p,i) => (
      <Animated.View
        key={`particle-${i}`}
        style={[styles.floatingParticle,{
          width:p.size,
          height:p.size,
          borderRadius:p.size/2,
          opacity:p.opacity,
          transform:[
            {translateX:p.x},
            {translateY:p.y},
            {rotate:p.rotate.interpolate({inputRange:[0,360],outputRange:['0deg','360deg']})}
          ]
        }]}
      />
    ));
  };

  // Render estrellas de fondo centelleantes
  const renderTwinklingStars = () => {
    const stars = [];
    for(let i=0;i<30;i++){
      const size = Math.random()*3+1;
      stars.push(
        <Animated.View key={`star-${i}`} style={[styles.twinklingStar,{
          top: Math.random()*400,
          left: Math.random()*width,
          width:size,
          height:size,
          borderRadius:size/2,
          opacity: starTwinkle.interpolate({inputRange:[0,0.3,0.6,1],outputRange:[0.2,1,0.5,0.2]})
        }]}/>
      )
    }
    return stars;
  };

  // Render estrellas fugaces
  const renderShootingStars = () => {
    const colors = ['#FFFFFF','#87CEFA','#BA55D3','#DDA0DD','#F0E68C'];
    return shootingStars.map((star,index)=>{
      const startTop = Math.random()*200 + 50;
      const endTop = startTop + Math.random()*120+50;
      return (
        <Animated.View key={`shooting-${index}`} style={[styles.shootingStar,{
          opacity: star.interpolate({ inputRange:[0,0.2,0.8,1], outputRange:[0,1,1,0] }),
          transform:[
            {translateX: star.interpolate({ inputRange:[0,1], outputRange:[-100,width+100] })},
            {translateY: star.interpolate({ inputRange:[0,1], outputRange:[startTop,endTop] })},
            {rotate: star.interpolate({ inputRange:[0,1], outputRange:['10deg','30deg'] })}
          ]
        }]}>
          <View style={[styles.shootingStarHead,{backgroundColor: colors[index%colors.length]}]} />
          <View style={[styles.shootingStarTail,{backgroundColor: colors[index%colors.length]}]} />
        </Animated.View>
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cosmicScene}>
        {renderFloatingParticles()}
        {renderTwinklingStars()}
        {renderNebula()}
        {renderShootingStars()}
        <View style={styles.spaceOverlay}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>ITT Tlaxiaco</Text>
        <Text style={[styles.text, styles.subtitle]}>Desarrollo Móvil</Text>
        <Text style={[styles.text, styles.name]}>Daniel Velasco López</Text>
        <Text style={[styles.text, styles.name]}> Y </Text>
        <Text style={[styles.text, styles.name]}>Blanca E. Valerio Rivero</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#050818", alignItems:"center", justifyContent:"center" },
  cosmicScene:{ width:width, height:400, position:'relative', overflow:'hidden' },
  spaceOverlay:{ ...StyleSheet.absoluteFillObject, backgroundColor:'transparent' },
  nebulaContainer:{ position:'absolute', top:'40%', left:'50%', marginLeft:-100, marginTop:-100, width:200, height:200, alignItems:'center', justifyContent:'center' },
  nebulaCore:{ width:60,height:60,borderRadius:30, backgroundColor:'#483D8B', alignItems:'center', justifyContent:'center', shadowColor:'#6A5ACD', shadowOffset:{width:0,height:0}, shadowOpacity:0.9, shadowRadius:30, elevation:20 },
  coreInnerGlow:{ width:20,height:20,borderRadius:10, backgroundColor:'#9370DB', shadowColor:'#FFFFFF', shadowOffset:{width:0,height:0}, shadowOpacity:0.8, shadowRadius:15 },
  coreOuterGlow:{ position:'absolute', width:80, height:80, borderRadius:40, backgroundColor:'rgba(106, 90, 205, 0.3)' },
  gasRing:{ position:'absolute', borderWidth:2, borderRadius:100, borderColor:'rgba(147, 112, 219, 0.4)' },
  gasRing1:{ width:120,height:120,top:40,left:40 },
  gasRing2:{ width:160,height:160,top:20,left:20 },
  gasRing3:{ width:200,height:200,top:0,left:0 },
  orbitStar:{ position:'absolute', width:3, height:3, borderRadius:1.5, shadowColor:'#FFFFFF', shadowOffset:{width:0,height:0}, shadowOpacity:0.7, shadowRadius:2 },
  floatingParticle:{ position:'absolute', backgroundColor:'rgba(255,255,255,0.6)', shadowColor:'#FFFFFF', shadowOffset:{width:0,height:0}, shadowOpacity:0.5, shadowRadius:2 },
  twinklingStar:{ position:'absolute', backgroundColor:'#FFFFFF', shadowColor:'#FFFFFF', shadowOffset:{width:0,height:0}, shadowOpacity:0.8, shadowRadius:2, elevation:3 },
  shootingStar:{ position:'absolute', top:0,left:0, flexDirection:'row', alignItems:'center' },
  shootingStarHead:{ width:4,height:4,borderRadius:2, backgroundColor:'#FFFFFF', shadowColor:'#FFFFFF', shadowOffset:{width:0,height:0}, shadowOpacity:1, shadowRadius:8 },
  shootingStarTail:{ width:40,height:1, backgroundColor:'rgba(255,255,255,0.7)', marginLeft:2 },
  textContainer:{ marginTop:40, alignItems:'center', paddingHorizontal:20 },
  text:{ color:'#fff', textAlign:'center', textShadowColor:'rgba(255,255,255,0.5)', textShadowOffset:{width:0,height:0}, textShadowRadius:10 },
  title:{ fontSize:32,fontWeight:'bold', marginBottom:8,color:'#E6E6FA', textShadowColor:'rgba(147,112,219,0.8)', textShadowOffset:{width:0,height:0}, textShadowRadius:15 },
  subtitle:{ fontSize:22, marginBottom:6, color:'#D8BFD8' },
  name:{ fontSize:18, fontStyle:'italic', color:'#DDA0DD' }
});
// Daniel Velasco López 