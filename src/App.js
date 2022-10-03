import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Detail from './Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
