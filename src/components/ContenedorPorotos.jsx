import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Porotos from "./Porotos";


const {width, height} = Dimensions.get("window")

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
    width: width*0.3,
    height: height*0.15,
    padding: width*0.01,
    gap: width*0.02,
    alignContent:"center",
  },
});
