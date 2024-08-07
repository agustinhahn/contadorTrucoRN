import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";


const {width, height} = Dimensions.get("window")

const BtnMas = ({setContador, contador}) => {

  const [sound, setSound] = useState();

  // Cargar sonido predeterminado
  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sumar.mp3')
    );
    await sound.setVolumeAsync(1.0);
    setSound(sound);
  }

  useEffect(() => {
    loadSound();
    return () => {
      // Liberar recursos de sonido cuando el componente se desmonte
      sound && sound.unloadAsync();
    };
  }, []);

    // Función para reproducir sonido predeterminado
async function playDefaultSound() {
  try {
    await sound.replayAsync();
  } catch (err) {
    console.error("Failed to play sound", err);
  }
}

  const sumarSi = () =>{
    if(contador <30){
      setContador(contador => contador + 1)
    }
    playDefaultSound()
  }



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>sumarSi()}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnMas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: width*0.1, // Ajusta el tamaño del botón según tus necesidades
    height: width*0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10, // Para Android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 }, // Para iOS
    shadowOpacity: 0.6,
    shadowRadius: 8,
    backgroundColor: "#d4b48c", // Necesario si usas una imagen de fondo
    // Puedes usar una imagen de textura de madera como fondo
    // source={require('./path/to/wood-texture.png')}
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: width*0.07,
    padding: width*0.01,
    paddingBottom: width*0.1
  },
});
