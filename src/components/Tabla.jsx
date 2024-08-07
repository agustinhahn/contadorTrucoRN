import { View, StyleSheet } from "react-native";
import Contador from "./Contador";
import CuerpoPuntos from "./CuerpoPuntos";
import Confetti from 'react-native-confetti';
import React, { useEffect ,useRef } from "react";

const Tabla = ({ contador, setContador }) => {

  
  const confettiRef = useRef(null);

  const triggerConfetti = () => {
    confettiRef.current.startConfetti();
  };

  useEffect(()=>{
    if(contador === 30){
      triggerConfetti();
    }
  },[contador])



  return (
    <View style={styles.container}>
      <Confetti ref={confettiRef} />
      <CuerpoPuntos contador={contador} />
      <Contador contador={contador} setContador={setContador} />
    </View>
  );
};

export default Tabla;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
