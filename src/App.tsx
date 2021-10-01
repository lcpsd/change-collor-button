import { BoxColored } from "./components/BoxColored";
import { Button } from "./components/Button";
import { ColorProvider } from "./context/colorContext";

function App() {

  return (
    <main>
      <ColorProvider>
        <div className="box-div">
          <BoxColored />
        </div>
        <div className="button-div">
          <Button color={'green'}/>
          <Button color={'red'}/>
        </div>
      </ColorProvider>
    </main>
  );
}

export default App;
