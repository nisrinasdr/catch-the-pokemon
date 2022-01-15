import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const url = `https://pokeapi.co/api/v2/pokemon`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState(false)
    const [previous, setPrevious] = useState(false)
    
    
    // Fetching data from API
    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
         
                let response = await fetch(url)
                const data = await response.json()
                await loadingPokemon(data.results)

                setNext(data.next)
                setPrevious(data.previous)
                setLoading(false)
            }
            catch(error) {
                console.log(error)
                setLoading(false)
            }
        }
      
        fetchData()
    }, [])

    const loadingPokemon = async(data) => {
        let allPokemon = await Promise.all(data.map(async item => {
            let pokemonItem = await fetch(item.url)
            let allReponse = await pokemonItem.json()
            return allReponse              
        }))
        setPokemon(allPokemon)
    }

    const nextPage = async() => {
        try {
            setLoading(true)
     
            let response = await fetch(next)
            const data = await response.json()
            await loadingPokemon(data.results)

            setNext(data.next)
            setPrevious(data.previous)
            setLoading(false)
        }
        catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    const previousPage = async() => {
        try {
            setLoading(true)
     
            let response = await fetch(previous)
            const data = await response.json()
            await loadingPokemon(data.results)

            setNext(data.next)
            setPrevious(data.previous)
            setLoading(false)
        }
        catch(error) {
            console.log(error)
            setLoading(false)
        }
    }

    const catchPokemon = (pokemon, nickname) => {
        let data = pokemon
        let res = checkNicknamePokemon(nickname)
        
        if(res){
            let final = checkCount(data.name,data, nickname)
            
            localStorage.removeItem("mypokemonlist");
            if(final.length > 0) {
                console.log('final',final)
                final.map(item => 
                    saveToLocalStorage("mypokemonlist", item)
                )
            } else {
                saveToLocalStorage("mypokemonlist", final)
            }
            navigate("/my-pokemon")
        } else {
           alert("nickname already selected")
        }
    }

    const removePokemon = (nickname, pokemon) => {
        let data = JSON.parse(localStorage.getItem("mypokemonlist"))
        let real = data.filter(item => item.name !== pokemon.name)
        let filter = data.filter(item => item.name === pokemon.name)
        let allNick = filter[0].nickname.split(", ")
        let newNic = allNick.filter(val => val !== nickname)
        let str = newNic.join(', ')
        filter[0].nickname = str
        filter[0].owned--

        if(filter[0].owned > 0){
            real.push(filter[0])
        }

        localStorage.removeItem("mypokemonlist");
        if(real.length > 0) {
            real.map(item => 
                saveToLocalStorage("mypokemonlist", item)
            )
        } else {
            saveToLocalStorage("mypokemonlist", real)
        }
        navigate('/my-pokemon')
    }

    const saveToLocalStorage = (name, item) => {
        let data = []
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }

        data.push(item)
        localStorage.setItem(name, JSON.stringify(data))
    }

   
    const checkCount = (name, poke, nickname) => {
        if(localStorage.getItem("mypokemonlist") !== null){
            let data = JSON.parse(localStorage.getItem("mypokemonlist"))
            let real = data.filter(item => item.name !== name)
            let res = data.filter(item => item.name === name)[0]
    
            if(res){
                if(res.owned){
                    res.owned+=1
                } else {
                    res.owned=2
                }
            } else {
                res = poke
                res.owned = 1
            }
            
            if(res.nickname){
                res.nickname = res.nickname.concat(", ",nickname)
            } else {
                res.nickname = nickname
            }

            real.push(res)
            return real
        } else {
            poke.owned = 1
            poke.nickname = nickname
            return poke
        }
    }

    const checkNicknamePokemon = (name) => {
        if(localStorage.getItem("mypokemonlist") !== null){
            let data = JSON.parse(localStorage.getItem("mypokemonlist"))

            let res = data.find(item => item.nickname === name)
            if(res){
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }

    return <AppContext.Provider value={{
        pokemon,
        loading,
        next,
        previous,
        nextPage,
        previousPage,
        catchPokemon,
        removePokemon
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
