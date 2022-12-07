import logo from './logo.svg';
import './App.css';
import Films from './component/films';
import { BrowserRouter,Route, Routes, Switch, UNSAFE_enhanceManualRouteObjects } from 'react-router-dom';

import Viewlist from './component/viewList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Films />} />
          <Route path='/viewlist' element={<Viewlist />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
