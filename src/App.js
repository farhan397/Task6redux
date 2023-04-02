import logo from './logo.svg';
import './App.css';
import RecipeList from './Component/RecipeList';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
    

      <RecipeList/>
    </div>
  );
}

export default App;
