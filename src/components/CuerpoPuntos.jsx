import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import ContenedorPorotos from "./ContenedorPorotos";


const {width, height} = Dimensions.get("window")
const CuerpoPuntos = ({ contador }) => {

  const primerDivision = 0
  const segundaDivision = 5
  const terceraDivision = 10
  const cuartaDivision = 15
  const quintaDivision = 20
  const sextaDivision = 25

  return (
    <>
    {
      contador < 15 ?(        <View style={styles.palillosContainer}>
        <ContenedorPorotos contador={contador} division={primerDivision} />
        <ContenedorPorotos contador={contador} division={segundaDivision}/>
        <ContenedorPorotos contador={contador} division={terceraDivision} />
      </View>) : (    <View style={styles.palillosContainer}>
      <ContenedorPorotos contador={contador} division={cuartaDivision} />
      <ContenedorPorotos contador={contador} division={quintaDivision}/>
      <ContenedorPorotos contador={contador} division={sextaDivision} />
    </View>)
    }


    </>

    
  );
};

export default CuerpoPuntos;

const styles = StyleSheet.create({
    palillosContainer: {
      flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap:height*0.04,
        marginTop: height*0.17,
      },
});
