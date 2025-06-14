// src/App.js
import HomePage from "./Components/templates/HomePage";
import Layout from "./Layout/Layout";
import { CryptoProvider } from "./Context/CryptoContext";


function App() {
  return (
    <CryptoProvider>
      <Layout />
    </CryptoProvider>
  );
}

export default App;
