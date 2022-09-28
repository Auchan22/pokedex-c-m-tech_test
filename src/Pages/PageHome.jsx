import React, { useEffect, useState } from 'react';
import GenericText from '../Components/GenericText';
import Searchbar from '../Components/Searchbar';
import PokemonCard from '../Components/PokemonCard';

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

const PageHome = () => {
  const [pokemonSearch, setPokemonSearch] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dataPokemon, setDataPokemon] = useState(null);

  const [empty, setEmpty] = useState(false);

  const handleClick = (data) => {
    if (pokemonSearch === '') {
      setEmpty(() => true);
    } else {
      setEmpty(() => false);
      fetchPokemon();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemonSearch(e.target[0].value);
    setPokemonSearch('');
  };

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    let value = e.target.value.toLowerCase();
    setPokemonSearch(() => value);
  };

  const fetchPokemon = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${URL}/${pokemonSearch}`);
      const dataRes = await res.json();

      // console.log(dataRes);

      let object = {
        nombre: dataRes.forms[0].name,
        imagen: dataRes.sprites.other.dream_world,
        tipos: dataRes.types,
        expBase: dataRes.base_experience,
        altura: dataRes.height,
        peso: dataRes.weight,
        habilidades: dataRes.abilities,
      };

      // console.log(object);

      setLoading(false);

      setDataPokemon(object);
      // console.log(dataPokemon);
    } catch (error) {
      setLoading(false);
      setError(true);

      // console.error(error);
    }

    const res = await fetch(`${URL}/${pokemonSearch}`);
    const data = await res.json();
  };

  return (
    <>
      <Searchbar
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        handleChange={handleInputChange}
        value={pokemonSearch}
        isEmpty={empty}
      />
      {loading && <h1>Cargando</h1>}
      {!dataPokemon ? <GenericText /> : <PokemonCard data={dataPokemon} />}
    </>
  );
};

export default PageHome;
