import "./styles.css";
import PrimaryApp from "./components/PrimaryApp";
import SecondaryApp from "./components/SecondaryApp";

export default function App() {
  return (
    <div className="App">
      <div className="ui grid" style={{ margin: "10px" }}>
        <div className="eight wide column">
          <PrimaryApp />
        </div>
        <div className="eight wide column">
          <SecondaryApp />
        </div>
      </div>
    </div>
  );
}
