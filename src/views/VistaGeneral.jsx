import { View, StyleSheet} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import Tabla from "../components/Tabla";
import {ContextCont} from "../context/PuntosContext";

const VistaGeneral = () => {
    const { contador1, setContador1 } = useContext(ContextCont)
    const { contador2, setContador2 } = useContext(ContextCont)
    return (
    <View style={styles.container}>
        <Tabla
            defaultName="Nosotros"
            contador={contador1}
            setContador={setContador1}
        />
        <Tabla
            defaultName="Ellos"
            contador={contador2}
            setContador={setContador2}
        />
        <StatusBar style="auto" />
        </View>
    );
};

export default VistaGeneral;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
    },
});
