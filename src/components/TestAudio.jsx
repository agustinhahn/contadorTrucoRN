//este componente sirve para grabar audio y reproducirlo tambien.

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";

const TestAudio = () => {
  const [recording, setRecording] = useState();
  const [recordings, setRecordings] = useState([]);
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

  async function startRecording() {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        console.log("Permission to record audio not granted");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    try {
      setRecording(undefined);
      await recording.stopAndUnloadAsync();

      const { sound: newSound, status } = await recording.createNewLoadedSoundAsync();
      setRecordings((prev) => [
        ...prev,
        {
          sound: newSound,
          duration: getDurationFormatted(status.durationMillis),
          file: recording.getURI(),
        },
      ]);
    } catch (err) {
      console.error("Failed to stop recording", err);
    }
  }

  function getDurationFormatted(milliseconds) {
    const minutes = Math.floor(milliseconds / 1000 / 60);
    const seconds = Math.round((milliseconds / 1000) % 60);
    return seconds < 10
      ? `${minutes}:0${seconds}`
      : `${minutes}:${seconds}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => (
      <View key={index} style={styles.row}>
        <Text style={styles.fill}>
          Recording #{index + 1} | {recordingLine.duration}
        </Text>
        <Button onPress={() => recordingLine.sound.replayAsync()} title="Play" />
      </View>
    ));
  }

  function clearRecordings() {
    setRecordings([]);
  }

  // Función para reproducir sonido predeterminado
  async function playDefaultSound() {
    try {
      await sound.replayAsync();
    } catch (err) {
      console.error("Failed to play sound", err);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Test Audio"
        onPress={playDefaultSound}
      />
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />
      {getRecordingLines()}
      {recordings.length > 0 && (
        <Button title="Clear Recordings" onPress={clearRecordings} />
      )}
    </View>
  );
};

export default TestAudio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 40,
  },
  fill: {
    flex: 1,
    margin: 15,
  },
});
