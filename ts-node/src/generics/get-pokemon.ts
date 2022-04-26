import axios from 'axios';
import { PokemonI } from '../interfaces/pokemon';

export const getPokemon = async (pokeId: number):Promise<PokemonI> => {
    const {data} = await axios.get<PokemonI>(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    return data;
}