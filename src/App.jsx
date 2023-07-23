import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/vistas/Home';
import Pokemones from '../src/vistas/Pokemones';
import Pokemon from '../src/vistas/Pokemon';
import Navbar from '../src/components/Navbar';
import { NotFound as Page404 } from './vistas/404';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Pokemon />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
