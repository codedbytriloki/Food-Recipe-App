import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import RecipeDetails from './pages/RecipeDetails';

function App() {

 
return (
  < >
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result/:inputValue' element={<SearchResult/>} />
        <Route path='/recipe/:id' element={<RecipeDetails/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
