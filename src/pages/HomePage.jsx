import React, { useRef } from 'react'
import { setTrainerSlice } from '../store/slices/trainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../components/PokedexPage/styles/HomePage.css'

const HomePage = () => {

  const inputTrainer = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleTrainer = (e) => {
    e.preventDefault()
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className='Homepage' >
      <h2 className='Homepage__trainer' >¡Welcome trainer!
      </h2>
        <img className='Homepage__image'
          src="/PokedexImage.png" alt="PokedexImage"
         />
      <p className='Homepage__enter' >To start, enter your PokeName</p>
      <form className='Homepage__form' onSubmit={handleTrainer}>
        <input className='Homepage__input' ref={inputTrainer} type="text" />
        <button className='Homepage__button' >Start</button>
      </form>
    </div>
  )
}

export default HomePage