import './App.css';
import Globalprovider from './context/Globalprovider';
import Routes from './routsComponents/Routes';

function App() {
  return (
    <div >
      <Globalprovider>
       <Routes/>
      </Globalprovider>
    </div>
  );
}
export default App;
  


