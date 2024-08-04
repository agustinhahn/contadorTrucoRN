import { View, StyleSheet } from "react-native";
import React from "react";
import Porotos from "./Porotos";

const ContenedorPorotos = ({ contador, division }) => {


  return (
    <View style={styles.square}>
      <Porotos visible={contador-division > 0}/>
      <Porotos visible={contador-division > 1} />
      <Porotos visible={contador-division > 2} />
      <Porotos visible={contador-division > 3} />
      <Porotos visible={contador-division > 4} />
    </View>
  );
};

export default ContenedorPorotos;

const styles = StyleSheet.create({
  square: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: 130,
    height: 130,
    padding: 10,
    gap:5,
    alignContent:"center"
  },
});
