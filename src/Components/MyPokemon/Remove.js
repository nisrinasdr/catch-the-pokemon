import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaTrash } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import { Title } from '../Detail/DetailStyles'
import { Button } from '../Styles'
import { RemoveContent, RemoveWrap } from './RemoveStyles'

function Remove() {
    const {name} = useParams();
    const {removePokemon} = useGlobalContext()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() =>{
        let res = JSON.parse(localStorage.getItem("mypokemonlist"))
        setPokemon(res.filter(item => item.name === name)[0])
    },[name])

    return (
        <>
            { pokemon && (
                <RemoveWrap style={{top:'0'}}>
                    <Link to={`/my-pokemon`} style={{textDecoration:"none"}}>
                        <FaArrowLeft style={{color:"#000"}}/>
                    </Link>
                    <Title>Release Pokemon</Title>
                    { pokemon.nickname.split(", ").map((item, i) => 
                        (<RemoveContent key={i}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <div>
                                <p style={{fontWeight:"bold"}}>{pokemon.name}</p>
                                <p>{item}</p>
                            </div>
                            <Button><FaTrash onClick={() => removePokemon(item, pokemon)}/></Button>
                        </RemoveContent>)
                    )}
                </RemoveWrap>)
            }
        </>
    )
}

export default Remove
