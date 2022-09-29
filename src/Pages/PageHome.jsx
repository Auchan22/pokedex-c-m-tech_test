import React, { useContext, useEffect, useState } from 'react';
import ErrorMessage from '../Components/ErrorMessage';
import GenericText from '../Components/GenericText';
import Loading from '../Components/Loading';
import PokemonCard from '../Components/PokemonCard';

import PokemonContext from '../Context/PokemonContext';

const PageHome = () => {
  const { dataPokemon, loading, error } = useContext(PokemonContext);

  return (
    <>
      {/* {error ? (
        <ErrorMessage />
      ) : !dataPokemon ? (
        <GenericText />
      ) : loading ? (
        <Loading />
      ) : (
        <PokemonCard data={dataPokemon} />
      )} */}

      {loading && <Loading />}
      {!dataPokemon && !error ? (
        <GenericText />
      ) : !error && !loading ? (
        <PokemonCard data={dataPokemon} />
      ) : (
        !loading && <ErrorMessage />
      )}

      {/* <Loading /> */}
    </>
  );
};

export default PageHome;
