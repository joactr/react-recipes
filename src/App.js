
import './App.css';
import Axios from "axios";

function App() {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

  async function getRecipes(){
    var result = await Axios.get(url);
    console.log(result.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <a
          onClick={getRecipes}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
