import { View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const {width, height} = Dimensions.get("window")

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
        width: width*0.06,
        height: height*0.04,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height*0.03
        },
        image: {
        width: width*0.15, // Ajusta el tamaño de la imagen según tus necesidades
        height: width*0.15,
        },
    });
