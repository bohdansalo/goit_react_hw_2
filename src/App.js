import "./App.css";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Message from "./components/Message";

function App() {
  const handleClick = () => {
    console.log("button click(((");
  };

  return (
    <div className="App">
      <Greeting name="Tetiana❤❤❤" />
      <Button onClick={handleClick} />
      <Message text="qq this react message" />
    </div>
  );
}

export default App;
