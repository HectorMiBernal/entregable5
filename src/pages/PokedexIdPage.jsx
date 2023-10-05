import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../components/PokedexPage/styles/PokedexPage.css'
import '../components/PokedexPage/styles/selectTipe.css'
import '../components/PokedexPage/styles/pokedexIdPage.css'

const PokedexIdPage = () => {
    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemon, getPokemon] = useFetch(url)

    useEffect(() => {
        getPokemon()
    }, [id])

    return (
        <article className='idpage' >
            <header className='idpage__header' >
            <h2 className={`idpage__name ${pokemon?.types[0].type.name}-color`} >My name is {pokemon?.name}</h2>
            <p className='idpage__number' >I am the # {pokemon?.order} in a ordered list of all Pokemons</p>
            <img className='idpage__image' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
           
            <section className='idpage__body' >
            <ul className='idpage__title3'> Type:
            <li className={`idpage__typeinfo ${pokemon?.types[0].type.name}-color`}>{pokemon?.types[0].type.name}</li>               
            <li className={`idpage__typeinfo ${pokemon?.types[1].type.name}-color`}>{pokemon?.types[1].type.name}</li>
            </ul>
     
            <ul className='idpage__title3' >Skills: {pokemon?.abilities.map(abilities => (
            <li className='idpage__skillinfo' 
                key={abilities.ability.url}> {abilities.ability.name} </li>
                ))}
            </ul>
            </section>

            <h2 className='idpage__title2' >Stats: </h2>
             <ul className='idpage__stats' > 
              {pokemon?.stats.map(statInfo => (
                <li  
                key={statInfo.stat.url}>
                <span className='idpage__statsname'>{statInfo.stat.name}: </span>
                <span className='idpage__statsinfo'>{statInfo.base_stat}</span>
                </li>
            ))}
            </ul>

            <h2 className='idpage__title2' > Moves: </h2>
            <ul  className='idpage__moves'>  
            {pokemon?.moves.map(movesInfo => (
                <li  key={movesInfo.move.url}>
                <span >{movesInfo.move.name} </span>
              </li>
            ))}
            </ul>
        </article >
    )
}

export default PokedexIdPage