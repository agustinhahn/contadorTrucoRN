import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const Estado = ({contador}) => {



    const [estadoJuego, setEstadoJuego] = useState("EN MALAS")

    useEffect(()=>{
        if(contador>14){
            setEstadoJuego('EN BUENAS')
        }
        else if(contador<15){
          setEstadoJuego('EN MALAS')
        }
    },[contador])

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{estadoJuego}</Text>
    </View>
  );
};

export default Estado;


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
    },
    texto:{

    }
})