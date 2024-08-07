import { View, StyleSheet, Dimensions} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import Tabla from "../components/Tabla";
import {ContextCont} from "../context/PuntosContext";


const {width, height} = Dimensions.get("window")

const VistaGeneral = () => {
    const { contador1, setContador1 } = useContext(ContextCont)
    const { contador2, setContador2 } = useContext(ContextCont)
    return (
    <View style={styles.container}>
        <Tabla
            contador={contador1}
            setContador={setContador1}
        />
        <Tabla
            contador={contador2}
            setContador={setContador2}
        />
        <StatusBar hidden={true} />
        </View>
    );
};

export default VistaGeneral;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: width*0.03
    },
});
