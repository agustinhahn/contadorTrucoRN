import { View, StyleSheet } from "react-native";
import React from "react";

const Porotos = ({ visible }) => {
    return (
        <View
            style={[
            styles.poroto,
            {
                display: visible ? "flex" : "none",
            },
        ]}
        ></View>
    );
};

export default Porotos;

const styles = StyleSheet.create({
    poroto: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderColor: "red",
        borderWidth: 2,
    },
});
