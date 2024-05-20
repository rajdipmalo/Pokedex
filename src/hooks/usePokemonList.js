import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
        nextUrl:'',
        prevUrl:'',
       
    })


    async function downloadPokemons(){
        
       


        
        
        // setIsLoading(true);
        setPokemonListState((state) => ({ ...state, isLoading:true}))
        //const response = await axios.get(pokedexUrl);
        const response = await axios.get(pokemonListState.pokedexUrl);   // this download list of 20 pokemon

        const pokemonResults = response.data.results;    // we get the array of pokemons from results

        console.log(response.data);
        // setNextUrl(response.data.next);
        // setPervUrl(response.data.previous);
        setPokemonListState((state) => ({
            ...state, 
            nextUrl:response.data.next, 
            prevUrl:response.data.previous
        }));
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        //passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonResultPromise);  //array of 20 pokemon detailed data
        console.log(pokemonData);
        //now iterate on the data of each pokemon and exterct id, name, image, types
        const pokeListResult = pokemonData.map((pokeData) =>{
        const pokemon = pokeData.data
        return {
                id: pokemon.id,
                name: pokemon.name, 
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                types:pokemon.types
            }
        })
        console.log(pokeListResult);
        //setPokemonList(pokeListResult);
        setPokemonListState((state) => ({
            ...state, 
            pokemonList: pokeListResult, 
            isLoading:false
        }));
        //setIsLoading(false);
            
        
    }


    useEffect(() => {
        downloadPokemons();
    
    }, [pokemonListState.pokedexUrl]);
    
    return [ pokemonListState, setPokemonListState]

}



export default usePokemonList;