import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import { CardDiv, CardWrap } from '../Card/CardStyles'
import { RoundButton } from '../Styles'
import Remove from './Remove'

function MyPokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [remove, setRemove] = useState(false)

    useEffect(() =>{
        setPokemon(JSON.parse(localStorage.getItem("mypokemonlist")))
    },[])

    return (
        <>
          {pokemon === null? 
              <p style={{padding:"1em"}}>You don't have any pokemon.</p>:(
              <CardWrap> 
              { pokemon.map((data, i) => 
                <CardDiv key={i}>
                  <Link to={`/${data.name}`} style={{textDecoration:"none"}}>
                  <Card key={i} name={data.name} pic={data.sprites.front_default} nickname={data.nickname} owned={data.owned}/>
                  </Link>
                  <Link to={`/delete/${data.name}`} style={{textDecoration:"none"}}>
                    <RoundButton><FaEdit/></RoundButton>
                  </Link>
                </CardDiv>
              )}
              </CardWrap>)}  
        </>
    )
}

export default MyPokemon
