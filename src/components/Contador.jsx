import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect,  useState } from "react";
import BtnMenos from "./BtnMenos";
import BtnMas from "./BtnMas";
import BtnReset from "./BtnReset";
import { Audio } from "expo-av";


const { width, height } = Dimensions.get("window");

const Contador = ({ contador, setContador }) => {
  const [sound, setSound] = useState(null);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);


  // Cargar sonido predeterminado
  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/lambada.mp3')
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
      if (sound) {
        await sound.replayAsync();
        setHasPlayedSound(true);
      }
    } catch (err) {
      console.error("Failed to play sound", err);
    }
  }

  useEffect(() => {
    // Verificar si el contador es 30 y si el sonido ya ha sido reproducido
    if (contador === 30 && !hasPlayedSound) {
      playDefaultSound();
    }
  }, [contador, hasPlayedSound]);


  return (
    <View style={styles.container}>
      <View style={styles.contadores}>
        <BtnMenos setContador={setContador} contador={contador} />
        <Text style={styles.texto}>{contador}</Text>
        <BtnMas setContador={setContador} contador={contador} />
      </View>
      <View>
        <BtnReset setContador={setContador} />
      </View>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  contadores: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width * 0.30,
  },
  texto: {
    width: width * 0.1,
    fontSize: width * 0.06,
    textAlign: "center",
  }
});
