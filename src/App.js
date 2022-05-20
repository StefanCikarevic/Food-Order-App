import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <h2>Lets get started</h2>
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
