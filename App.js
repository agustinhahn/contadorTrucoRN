import { StatusBar } from "expo-status-bar";
import { StyleSheet,  View } from "react-native";
import NombreEditable from "./src/components/NombreEditable";
import Contador from "./src/components/Contador";

export default function App() {
  return (
    <View style={styles.container}>
      <NombreEditable defaultName="Nosotros"/>
      <NombreEditable defaultName="Ellos" />
      <Contador />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
