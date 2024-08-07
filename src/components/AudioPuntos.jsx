import React, { useState, useEffect } from "react";
import {  View, Button } from "react-native";
import { Audio } from "expo-av";
const AudioPuntos = () => {

  const [sound, setSound] = useState();

    // Cargar sonido predeterminado
    async function loadSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audiotest.mp3')
      );
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
  return (
    <View>
            <Button
        title="Test Audio"
        onPress={playDefaultSound}
      />
    </View>
  )
}

export default AudioPuntos