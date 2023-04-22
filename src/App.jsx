import "./App.css";
import Header from "./components/Header";
import KYC from "./components/KycWrapper/Form/KYC";

function App() {
  return (
    <div className="App">
      <div className="bg-white p-6 text-left shadow-md rounded-md">
        <Header />
        <KYC />
      </div>
    </div>
  );
}

export default App;
