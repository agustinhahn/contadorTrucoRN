
import { ImageBackground, StyleSheet } from "react-native";
import PuntosContext from "./src/context/PuntosContext";
import VistaGeneral from "./src/views/VistaGeneral";

export default function App() {

  return (
    <>
      <PuntosContext>
        <ImageBackground style={styles.background} source={require("./assets/fondo.png")}>
        <VistaGeneral />
        </ImageBackground>
      </PuntosContext>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta el tamaño de la imagen
}
})