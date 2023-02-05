
import{ Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';


const AppRouter = () => {
    return (
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={`Todos los Productos`} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={`Productos Filtrados`} />} />
        <Route path='/item/:productId' element={<ItemDetailContainer />} />
      </Routes>

    )
}

export default AppRouter