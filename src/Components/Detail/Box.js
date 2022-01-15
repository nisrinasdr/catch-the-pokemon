import React from 'react'

import { Button, Input, Overlay } from '../Styles'
import { BoxWrap } from './BoxStyles'
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from '../../Context';

function Box(props) {
    const {catchPokemon} = useGlobalContext()
    return (
        <Overlay>
            <BoxWrap key={props.pokemon.name}>
                <FaArrowLeft onClick={() => props.setBox(false)}/>
                <p>Add <strong>{props.name}</strong> to your Pokemon List?</p>
                <label>Give you pokemon a nickname</label>
                <Input type="text" placeholder="Nickname" onChange={props.handleInput} value={props.nickname}/>
                <Button style={{float: "right"}} onClick={() => catchPokemon(props.pokemon, props.nickname)}>Catch</Button>
            </BoxWrap>
        </Overlay>
    )
}

export default Box
