import { View, StyleSheet, Image } from "react-native";
import React from "react";

const Porotos = ({ visible }) => {
    return (
        <View style={[styles.poroto, { display: visible ? "flex" : "none" }]}>
            <Image
            source={require("../../assets/poroto.png")} // Ruta de la imagen PNG
            style={styles.image}
            />
        </View>
        );
    };
    
    export default Porotos;
    
    const styles = StyleSheet.create({
        poroto: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop:15
        },
        image: {
        width: 50, // Ajusta el tamaño de la imagen según tus necesidades
        height: 50,
        },
    });
