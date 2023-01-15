import './App.css';
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<ItemListContainer greeting={`Todos los Productos`} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={`Productos Filtrados`} />} />
        <Route path='/item/:productId' element={<ItemDetailContainer />} />
      
      </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
