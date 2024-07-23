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
        <Text style={styles.nombre}>{nombre ? nombre : defaultName}</Text>
        {edit ? (
            <View>
            <TextInput
                onChangeText={setNombre}
                value={nombre}
                placeholder="Escribe aquí..."
            ></TextInput>
            <Pressable style={styles.edit} onPress={() => setEdit(false)}><Text>save</Text></Pressable>
            </View>
        ) : (
            <Pressable style={styles.edit} onPress={() => editarNombre()}>
            <Text>Edit</Text>
            </Pressable>
        )}
        </View>
    );
    };

export default NombreEditable;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    marginTop: 20,
    height: 70
  },
  edit: {
    backgroundColor: "red",
  },
  nombre:{
    color: "white",
    fontSize: 30
  }
});
