import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const BtnMas = ({setContador, contador}) => {

  const sumarSi = () =>{
    if(contador <30){
      setContador(contador => contador + 1)
    }
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
    width: 50, // Ajusta el tamaño del botón según tus necesidades
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
    fontSize: 25,
    padding: 5,
    paddingBottom: 10
  },
});
