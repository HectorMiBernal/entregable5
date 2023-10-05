import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "../PokedexPage/styles/selectTipe.css"

const SelectTipe = ({ setTypeSelected }) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes] = useFetch(url)

    useEffect(() => {
        getTypes()
    }, [])

    const handleChange = (e) => {
        setTypeSelected(e.target.value)
    }
    return (
        <div className='SelectTipe__div' >
            <select className='SelectTipe__select' onChange={handleChange}>
                <option value='allPokemons'>All pokemons</option>
                {
                    types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default SelectTipe

