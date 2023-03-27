import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image, Button, Alert, TouchableOpacity } from 'react-native';
import image2 from './assets/bear.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://picsum.photos/seed/picsum/200/200'}} style={styles.images}/>
      <Text style={styles.title}>Anthony Tineo Cabreja</Text>
      <Image 
        source={image2} 
        style={styles.images2}
      />
      <Button
        title='Iniciar sesion'
        color='#F02D2D'
        onPress={() => Alert.alert('Hola Anthony')}
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => Alert.alert('Hola Anthony')}
      >
        <Text style={styles.textButton}>Registrarse</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
  },

  images: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },

  images2: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },

  button1: {
    borderRadius: 25,
    backgroundColor: '#F02D2D',
    margin: 10,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 120,
  },

  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
