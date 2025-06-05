import Main from "./components/Main";
import Header from "./components/Header";
import { ResultsProvider } from "./context/ResultsContext";

function App() {
  return (
    <ResultsProvider>
      <Header />
      <Main />
    </ResultsProvider>
  );
}

export default App;
