
import { Route, Routes } from "react-router-dom"


import PokemonDetails from "../components/PokemonDetails/PokemonDetails"
import Pokedex from "../components/Pokedex/Pokedex1"

function CustomRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />}/>
        </Routes>
    )
}

export default CustomRoutes