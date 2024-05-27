import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { TarefasProvider } from "./context/TarefasContext";

function App() {
  return (
    <div className="App">
      
      <TarefasProvider>
      <Header />
      <ListarTarefa />
      </TarefasProvider>
      
    </div>
  );
}

export default App;
