import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import BtnMenos from "./BtnMenos";
import BtnMas from "./BtnMas";

const Contador = () => {

    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <BtnMenos setContador={setContador} contador={contador}/>
            <Text>{contador}</Text>
            <BtnMas setContador={setContador} contador={contador} />
        </View>
    );
};

export default Contador;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"

    }
})