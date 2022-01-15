import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home';
import Detail from './Components/Detail/Detail';
import MyPokemon from './Components/MyPokemon/MyPokemon';
import { AppProvider } from './Context';

function App() {
  return (
    <Router>
      <div>
        <AppProvider>
        <Header/>

        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/:name' element={<Detail/>} exact />
          <Route path='/my-pokemon' element={<MyPokemon/>} exact />
        </Routes >
        </AppProvider>
      </div>
    </Router>
  );
}

export default App;
