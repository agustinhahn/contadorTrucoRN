import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

const NombreEditable = ({ defaultName }) => {
    const [nombre, setNombre] = useState(null);

    const [edit, setEdit] = useState(false);

    const editarNombre = () => {
        setEdit(true);
    };

    return (
        <View style={styles.container}>
        <Text>{nombre ? nombre : defaultName}</Text>
        {edit ? (
            <View>
            <TextInput
                onChangeText={setNombre}
                value={nombre}
                placeholder="Escribe aquí..."
            ></TextInput>
            <Pressable style={styles.edit} onPress={() => setEdit(false)}>save</Pressable>
            </View>
        ) : (
            <Pressable style={styles.edit} onPress={() => editarNombre()}>
            Edit
            </Pressable>
        )}
        </View>
    );
    };

export default NombreEditable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    backgroundColor: "red",
  },
});
