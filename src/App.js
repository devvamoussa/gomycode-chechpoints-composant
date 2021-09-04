import Image from "./Component/profil/ProfilePhoto";
import FullName from "./Component/profil/FullName";
import Address from "./Component/profil/Address";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Image/>
        <FullName/>
        <Address/>
      </div>
    </div>
  );
}

export default App;
