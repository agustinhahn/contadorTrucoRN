import { View,  StyleSheet } from "react-native";
import NombreEditable from "./NombreEditable";
import Contador from "./Contador";
import CuerpoPuntos from "./CuerpoPuntos";
import Estado from "./Estado";
const Tabla = ({defaultName, contador, setContador}) => {

  return (
    <View style={styles.container}>
      <NombreEditable defaultName={defaultName}/>
      <Estado contador={contador} />
      <CuerpoPuntos contador={contador} />
      <Contador contador={contador} setContador={setContador} />
    </View>
  );
};
export default Tabla;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
});
