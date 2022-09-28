import { createContext, useState } from 'react';
import useEmpty from '../hooks/useEmpty';

const PokemonContext = createContext();

export default PokemonContext;

const PokemonInfo = {
  nombre: '',
  imagen: '',
  tipos: [],
  expBase: '',
  altura: '',
  peso: '',
  habilidades: [],
};

const URL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonProvider = ({ children }) => {
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [empty, setEmpty] = useState(false);

  const [dataPokemon, setDataPokemon] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { isEmpty } = useEmpty(pokemonSearch);

  const handleClick = () => {
    if (pokemonSearch === '') {
      setEmpty(isEmpty);
    } else {
      if (!error) {
        setEmpty(isEmpty);
        fetchPokemon();
        setError(false);
      } else {
        fetchPokemon();
      }
    }

    setPokemonSearch('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    // setPokemonSearch(e.target[0].value);
    setPokemonSearch('');
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    let value = e.target.value.toLowerCase();
    setPokemonSearch(() => value);
  };

  const fetchPokemon = async () => {
    setLoading(true);
    // console.log(`${URL}/${pokemonSearch}`);
    fetch(`${URL}/${pokemonSearch}`)
      .then((res) => res.json())
      .then((data) => {
        let object = {
          nombre: data.forms[0].name,
          imagen: data.sprites.other.dream_world,
          tipos: data.types,
          expBase: data.base_experience,
          altura: data.height,
          peso: data.weight,
          habilidades: data.abilities,
        };
        // console.log(object);
        setError(false);
        setDataPokemon(object);
        setLoading(false);
      })
      .catch((error) => {
        // console.error(error);
        setLoading(false);
        setError(error);
      });
  };

  const data = {
    loading,
    pokemonSearch,
    error,
    empty,
    dataPokemon,
    handleClick,
    handleInputChange,
    handleSubmit,
  };

  return (
    <PokemonContext.Provider value={data}>{children}</PokemonContext.Provider>
  );
};

export { PokemonProvider };
