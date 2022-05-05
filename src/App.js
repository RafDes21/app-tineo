import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
      <header >
      <NavBar/>
      </header>
      <ItemListContainer/>
      <h1 className='text-center pt-5'>Detalles...</h1>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
