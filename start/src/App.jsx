import nacelleImg from "./assets/nacelleImg.jpg";
import "./App.css";

const EquipmentNacelle = () => {
  return (
    <div>
      <p>name: Nacelle</p>
      <img src={nacelleImg} />
    </div>
  );
};

const EquipmentCamionbenne = () => {
  return <div></div>;
};

const EquipmentBetonniere = () => {
  return <div></div>;
};

function App() {
  return (
    <div>
      <EquipmentNacelle />
    </div>
  );
}

export default App;
