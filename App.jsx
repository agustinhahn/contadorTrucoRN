
import PuntosContext from "./src/context/PuntosContext";
import VistaGeneral from "./src/views/VistaGeneral";

export default function App() {

  return (
    <>
      <PuntosContext>
        <VistaGeneral />
      </PuntosContext>
    </>
  );
}
