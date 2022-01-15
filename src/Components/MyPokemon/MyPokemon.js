import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
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
                <CardDiv>
                  <Link to={`/${data.name}`} style={{textDecoration:"none"}}>
                  <Card key={i} name={data.name} pic={data.sprites.front_default} nickname={data.nickname} owned={data.owned}/>
                  </Link>
                  <RoundButton onClick={() => setRemove(true)}><FaEdit/></RoundButton>
                </CardDiv>
              )}
              {
              remove && (<Remove data={pokemon} setRemove={setRemove}/>)
              }
              </CardWrap>)}  
        </>
    )
}

export default MyPokemon
