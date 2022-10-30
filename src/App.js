import "./App.css";
import axios from "axios";

function App(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1a15e23b46fc8dbb324b4a9be06ed972&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="App">
      <h1>Hello Weather</h1>
    </div>
  );
}

export default App;
