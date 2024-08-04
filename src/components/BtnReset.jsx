import { Text, TouchableOpacity, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";

const BtnReset = ({setContador}) => {

    const manejador = () =>{
        setContador(0)
    }

    return (
        <TouchableOpacity style={styles.button} onPress={manejador}>
        <ImageBackground
            source={require("../../assets/fondoreset.png")}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
        >
            <View style={styles.content}>
            <Text style={styles.text}>RESET</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
    );
    };

export default BtnReset;

const styles = StyleSheet.create({
        button: {
            width: 150, // Ajusta el tamaño del botón según tus necesidades
            height: 50,
            borderRadius: 10, // Ajusta el radio del borde según tus necesidades
            overflow: 'hidden', // Asegúrate de que la imagen de fondo no se salga del botón
        },
        imageBackground: {
            flex: 1,
            justifyContent: 'center',
            alignItems:"center"
        },
        imageStyle: {
            borderRadius: 10, // Ajusta el radio del borde de la imagen
        },
        content: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:8
        },
        text: {
            color: 'black', // Ajusta el color del texto según sea necesario
            fontSize: 18,
            fontWeight: 'bold',
        },
});
