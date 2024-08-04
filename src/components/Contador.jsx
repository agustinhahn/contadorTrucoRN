import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BtnMenos from "./BtnMenos";
import BtnMas from "./BtnMas";
import BtnReset from "./BtnReset";

const Contador = ({ contador, setContador }) => {

    
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
    justifyContent:"center",
    alignItems:"center",
    marginBottom: 20
  },
  contadores: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft:16
  },
  texto:{
    width:25,
    fontSize: 20,
    textAlign: "center",
    marginRight:6
  }
});
