import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import BtnMenos from "./BtnMenos";
import BtnMas from "./BtnMas";

const Contador = ({ contador, setContador }) => {

    
  return (
        <View style={styles.container}>
        <View style={styles.contadores}>
            <BtnMenos setContador={setContador} contador={contador} />
            <Text>{contador}</Text>
            <BtnMas setContador={setContador} contador={contador} />
        </View>
        <View style={styles.reset}>
            <Pressable style={styles.btnReset} onPress={()=>setContador(0)}>
                <Text style={styles.text}>RESET</Text>
            </Pressable>
        </View>
        </View>
    );
};

export default Contador;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 20,
  },
  contadores: {
    flexDirection: "row",
  },
  btnReset: {
    width: 130, // Ajusta el tamaño del botón según tus necesidades
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 10, // Para Android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 }, // Para iOS
    shadowOpacity: 0.3,
    shadowRadius: 8,
    backgroundColor: "blue", // Necesario si usas una imagen de fondo
    // Puedes usar una imagen de textura de madera como fondo
    // source={require('./path/to/wood-texture.png')}
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    padding: 5,
    paddingBottom: 10,
  },
  reset:{
    marginTop: 7
  }
});
