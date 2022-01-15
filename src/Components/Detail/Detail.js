import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DetailDiv, DetailImageWrap, DetailWrap, FeaturedImage, StickyText, Tag, TagWrapper, TextWrapper, Title } from './DetailStyles';
import { FloatingButton } from '../Styles';
import { FaPlus} from 'react-icons/fa';
import Box from './Box';

function Detail() {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState(null)
    const [val, setVal] = useState(null)
    const [box, setBox] = useState(false)
    const [nickname, setNickname] = useState('')
    
   
    const url = `https://pokeapi.co/api/v2/pokemon`
    useEffect(() => {
        const pokemonSingle = async(name) => {
            try {
                let response = await fetch(`${url}/${name}`)
                const data = await response.json()
                setPokemon(data)
                console.log(data)
                setVal(data.sprites.front_default)
            }
            catch(error) {
                console.log(error)
            }
        }
        pokemonSingle(name)
    },[name, url])

    const handleInput = (evt) => {
        setNickname(evt.target.value)
    }
    
    return (
        <>
            { pokemon && (
                <DetailWrap key={pokemon.name}>
                    <DetailDiv>
                        <DetailImageWrap>
                            <FeaturedImage src={val} alt={pokemon.name}/>
                            <img src={pokemon.sprites.front_default}  alt={pokemon.name} onClick={() => setVal(pokemon.sprites.front_default)} />
                            <img src={pokemon.sprites.back_default} alt={pokemon.name} onClick={() => setVal(pokemon.sprites.back_default)} />
                        </DetailImageWrap>
                        
                        <Title>{pokemon.name}</Title>

                        <TagWrapper>
                            { pokemon.types.map((type, i) => (<Tag key={i}>{type.type.name}</Tag>))}
                        </TagWrapper>
                    </DetailDiv>
                    <TextWrapper>
                        <StickyText>Moves</StickyText>
                        { pokemon.moves.map((move, i) => (<p key={i}>{move.move.name}</p>))}
                    </TextWrapper>
       
                    { box? 
                      <Box name={pokemon.name} 
                           setBox={setBox} 
                           nickname={nickname}
                           setNickname={setNickname}
                           handleInput={handleInput}
                           pokemon={pokemon}>
                       </Box>:
                      (<FloatingButton onClick={() => setBox(true)}>
                          <FaPlus/> Catch the Pokemon
                       </FloatingButton>)
                    }

                </DetailWrap>
                )
                 
            }
           
           </>
       
    )
}

export default Detail
