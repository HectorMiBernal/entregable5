import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectTipe from '../components/PokedexPage/SelectTipe'
import '../components/PokedexPage/styles/PokedexPage.css'
import '../components/PokedexPage/styles/selectTipe.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')
  const trainer = useSelector(store => store.trainer)
  const inputSearch = useRef()
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=500"
  const [pokemons, getPokemons, getTypePokemon] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
    setInputValue('')
  }, [typeSelected])

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))
                      
  return (
    
  <div className='pokedex__div'>
    <img className='pokedex__image' src="public/PokedexImage.png" alt="" />
        <p className='pokedex__p'>¡ Hello {trainer} !</p>
        <h2 className='pokedex__h2'>Choose your favorite Pokémon</h2>
          <form onSubmit={handleSearch}>
            <input className='pokedex__input' ref={inputSearch} type="text" />
            <button className='pokedex__button' >Search</button>
          </form>
      <SelectTipe className='pokedex__tipe'
        setTypeSelected={setTypeSelected} 
      />
      <div className='pokedex__pokecard' >
        { pokeFiltered?.map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            /> ))
        }
      </div>
  </div>
  )
}

export default PokedexPage