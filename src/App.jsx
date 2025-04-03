
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex1'
import CustomRoutes from './routes/CustomRoutes'


function App() {
  

  return (
    <div className='outer-pokedex'>
      <h1 id ="pokedex-heading">
        <Link to="/xyz"> Pokedex </Link>
        </h1>
      <CustomRoutes />
      
    </div>
  )
}

export default App
