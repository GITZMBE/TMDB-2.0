import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layer from './pages/Layer';
import MoreInfo from './pages/MoreInfo';
import { MovieProvider } from './utils/MovieContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path='/' element={<Layer />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='moreInfo' element={<MoreInfo />} />
            </Route>
          </Routes>        
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;