import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import Home from './pages/home/home';
import SearchResults from './pages/search-results/search-result';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search/shows' element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;

